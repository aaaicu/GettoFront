import { API_HOST, PRD_API_HOST } from "./oauth/OAuthUrl";
import axios from "axios";

export const api = axios.create({baseURL: process.env.NODE_ENV === 'production'? `${PRD_API_HOST}` :`${API_HOST}`});
export const defaultApi = axios.create({baseURL: process.env.NODE_ENV === 'production'? `${PRD_API_HOST}` :`${API_HOST}`});


api.interceptors.request.use(function(config){
  if(!api.defaults.headers.common['Authorization']){
    reissueAccessToken(localStorage.getItem('refreshToken') );
  }

  // console.log('request => config ====================================');
  // console.log(config);
  // console.log(api.defaults.headers.common['Authorization']);
  return config;
}, function(error) {
  return Promise.reject(error);
});

api.interceptors.response.use(function(config){
  // console.log('response => config ====================================');
  // console.log(config);
  // console.log('response => config ====================================');
  return config;
}, function(error) {
  // access token  재발급
  return Promise.reject(error);
});


const reissueAccessToken = function(refreshToken){ 
  defaultApi.get('/auth/reissue?refreshToken='+ refreshToken).then((res) =>{
    localStorage.setItem('refreshToken', res.data.refreshToken)
    api.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;

    
  }).catch(function (error) {
    console.log(error)
    window.location.href = "/logout"

    return Promise.reject(error);
  });
}

