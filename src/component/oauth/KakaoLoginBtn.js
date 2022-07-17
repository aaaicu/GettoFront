import './KakaoLoginBtn.css';
import {KAKAO_AUTH_URL} from "./OAuthUrl"
import kakao_login from '../../resource/image/kakao_login.png';
import { useSelector } from 'react-redux';

function KakaoLonginBtn() {
    const profile = useSelector(state => state.profile);
    let buttonImage;
    if(!profile.authenticated){
        buttonImage = <a href={KAKAO_AUTH_URL}><img className="kakao_btn" src={kakao_login} alt="kakao login"/></a>
    }else{
        buttonImage = <img className="kakao_profile" src={profile.thumbnailImageUrl} alt="kakao login"/>
    }
    
    return (
        <div>
            {buttonImage}
        </div>
    );
  }
  
  export default KakaoLonginBtn;