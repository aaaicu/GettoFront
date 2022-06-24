import './KakaoLoginBtn.css';
import {KAKAO_AUTH_URL} from "./OAuthUrl"
import kakao_login from '../../resource/image/kakao_login.png';

function KakaoLonginBtn() {
    return (
        <a href={KAKAO_AUTH_URL}><img className="kakao_btn" src={kakao_login} alt="kakao login"/></a>
    );
  }
  
  export default KakaoLonginBtn;