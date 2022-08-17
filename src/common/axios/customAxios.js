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
  await resetToken(res.data.refreshToken, res.data.accessToken);
  const data = await api.request(error.config);

  return Promise.resolve(data);
}

const resetToken = async function (refreshToken, accessToken){
  localStorage.setItem('refreshToken', refreshToken);
  api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  console.log('=========== retry ============');
}

