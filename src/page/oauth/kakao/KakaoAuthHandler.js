import axios from "axios";
import { API_HOST } from "../../../component/oauth/OAuthUrl";

function KakaoAuthHandler() {
    return (
        <div >
            {
                callback()
            }
        </div>
    )
}

let callback = function (){
    
// 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  axios.get( `${API_HOST}/oauth/kakao?code=${code}`)
  .then((res) => {
    saveJwt(res.data.refreshToken, res.data.accessToken)
  })
  .then((res) => {
    // goToHome();
  })
}

let saveJwt = function(refreshToken, accessToken) {
    console.log(refreshToken, accessToken);

}

let goToHome = function() {
    window.location.href = '/';
}

export default KakaoAuthHandler;