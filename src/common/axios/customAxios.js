import { API_HOST, PRD_API_HOST } from "../../component/oauth/OAuthUrl";
import axios from "axios";

export const api = axios.create({baseURL: process.env.NODE_ENV === 'production'? `${PRD_API_HOST}` :`${API_HOST}`});
export const defaultApi = axios.create({baseURL: process.env.NODE_ENV === 'production'? `${PRD_API_HOST}` :`${API_HOST}`});


api.interceptors.request.use(function(config){
  // if(!api.defaults.headers.common['Authorization']){
  //   reissueAccessToken(localStorage.getItem('refreshToken') );
  // }

  // console.log('request => config ====================================');
  // console.log(config);
  // console.log(api.defaults.headers.common['Authorization']);
  return config;
}, function(error) {
  return Promise.reject(error);
});

api.interceptors.response.use(
  // function(config){
  //   // console.log('response => config ====================================');
  //   // console.log(config);
  //   // console.log('response => config ====================================');
  //   return config;
  // }
  null, 
  function(error) {
  // access token  재발급하여 재요청
  const result = retryReissueAccessToken(localStorage.getItem('refreshToken'), error);
  return Promise.resolve(result);
});


const retryReissueAccessToken = async function(refreshToken, error){ 
  const res = await defaultApi.get('/auth/reissue?refreshToken='+ refreshToken);
  localStorage.setItem('refreshToken', res.data.refreshToken);
  api.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
  const data = await api.request(error.config);

  return Promise.resolve(data);

  // defaultApi.get('/auth/reissue?refreshToken='+ refreshToken).then((res) =>{
  //   localStorage.setItem('refreshToken', res.data.refreshToken)
  //   api.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
  // }).catch(function (error) {
  //   return Promise.reject(error);
  // });
}

