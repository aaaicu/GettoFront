const CLIENT_ID = "e82fa866da628313f8a8e42774b72077";
//LOCAL
export const FRONT_HOST = "http://localhost:3000";
export const API_HOST = "http://localhost:9099";

//PROD
// export const FRONT_HOST = "https://www.yummy-things.xyz";
// export const PRD_API_HOST = "https://api.yummy-things.xyz";

const REDIRECT_URI =  `${FRONT_HOST}/callback/kakao`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;