const CLIENT_ID = "e82fa866da628313f8a8e42774b72077";
const REDIRECT_URI =  "https://api.yummy-things.xyz/oauth/kakao";

// const REDIRECT_URI =  "http://localhost:9099/oauth/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;