const CLIENT_ID = "e82fa866da628313f8a8e42774b72077";
//LOCAL
export const DEV_FRONT_HOST = "http://localhost:3000";
export const DEV_API_HOST = "http://localhost:9099";

//PROD
export const PRD_FRONT_HOST = "https://www.yummy-things.xyz";
export const PRD_API_HOST = "https://api.yummy-things.xyz";


export const FRONT_HOST = process.env.NODE_ENV === 'production'? `${PRD_FRONT_HOST}` :`${DEV_FRONT_HOST}`;
export const API_HOST = process.env.NODE_ENV === 'production'? `${PRD_API_HOST}` :`${DEV_API_HOST}`;

const REDIRECT_URI =  `${FRONT_HOST}/callback/kakao`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;