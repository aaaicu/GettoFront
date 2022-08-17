import { API_HOST, PRD_API_HOST } from "../../component/oauth/OAuthUrl";
import axios from "axios";

export const api = axios.create({baseURL: process.env.NODE_ENV === 'production'? `${PRD_API_HOST}` :`${API_HOST}`});
export const defaultApi = axios.create({baseURL: process.env.NODE_ENV === 'production'? `${PRD_API_HOST}` :`${API_HOST}`});


api.interceptors.request.use(function(config){
  return config;
}, function(error) {
  return Promise.reject(error);
});

api.interceptors.response.use(
  null, 
  function(error) {
  // access token  재발급하여 재요청
  if(error.response.status === 403 || error.response.status === 401 ){
    const result = retryReissueAccessToken(localStorage.getItem('refreshToken'), error);

    // 재요청 후에도 실패하면 로그아웃 처리
    result.catch(function(error) {
      console.log(error);
      window.location.href = '/logout';
    });
    return Promise.resolve(result); 
  }
});


const retryReissueAccessToken = async function(refreshToken, error){ 
  console.log('=========== retry ============');
  const res = await defaultApi.get('/auth/reissue?refreshToken='+ refreshToken);
  const config = await resetToken(res.data.refreshToken, res.data.accessToken, error.config);
  
  // 재요청
  const data = await api.request(config);

  return Promise.resolve(data);
}

const resetToken = async function (refreshToken, accessToken, config){
  // 기존 토큰 새로 업데이트
  localStorage.setItem('refreshToken', refreshToken);
  api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  // 재발급후 재요청 header의 액세스토큰 신규 토큰으로 변경
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
}

