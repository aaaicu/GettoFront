import { API_HOST, PRD_API_HOST } from "./oauth/OAuthUrl";
import axios from "axios";

export const api = axios.create({baseURL: process.env.NODE_ENV === 'production'? `${PRD_API_HOST}` :`${API_HOST}`});
export const defaultApi = axios.create({baseURL: process.env.NODE_ENV === 'production'? `${PRD_API_HOST}` :`${API_HOST}`});


api.interceptors.request.use(function(config){

  if(!api.defaults.headers.common['Authorization']){
    // 토큰 재발급로직;
    console.log("없음")
    reissueAccessToken()
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


const reissueAccessToken = function(){ defaultApi.get('/auth/reissue').then((res) =>{
    api.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
    debugger;
  }).catch(function (error) {
    window.location.href = "/logout"
    return Promise.reject(error);
  });
}

  // api.interceptors.request.use(
  //   (config) => {

  //   const profile = useSelector(state => state.profile);
  //     // HTTP Authorization 요청 헤더에 jwt-token을 넣음
  //     // 서버측 미들웨어에서 이를 확인하고 검증한 후 해당 API에 요청함.
  //   //   const token = store.getState().Auth.token;
  //   //   try {
  //   //     if (token && jwtUtils.isAuth(token)) {
  //   //       config.headers.Authorization = `Bearer ${token}`;
  //   //     }
  
  //   //     return config;
  //   //   } catch (err) {
  //   //     console.error('[_axios.interceptors.request] config : ' + err);
  //   //   }
  //     return config;
  //   },
  //   (error) => {
  //     // 요청 에러 직전 호출됩니다.
  //     return Promise.reject(error);
  //   }
  // );

  // api.interceptors.response.use(
  //   (response) => {
  //     /*
  //         http status가 200인 경우
  //         응답 성공 직전 호출됩니다.
  //         .then() 으로 이어집니다.
  //     */
  
  //     return response;
  //   },
  
  //   (error) => {
  //     /*
  //         http status가 200이 아닌 경우
  //         응답 에러 직전 호출됩니다.
  //         .catch() 으로 이어집니다.
  //     */
  //     return Promise.reject(error);
  //   }
  // );
