import './KakaoLoginBtn.css';
import {KAKAO_AUTH_URL} from "./OAuthUrl"
import kakao_login from '../../resource/image/kakao_login.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SET_LOGOUT } from './Auth';
import { api } from '../../common/axios/customAxios';

function KakaoLonginBtn() {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const logout = function() {
        dispatch(SET_LOGOUT());
        api.defaults.headers.common['Authorization'] = null;
        localStorage.clear();
      };

    const goLogin = function() {
        window.location.href =  KAKAO_AUTH_URL
    };

    let buttonImage;
    if(!profile.authenticated){
        buttonImage = <img style={{cursor : 'pointer'}} className="kakao_btn" onClick={goLogin} src={kakao_login} alt="kakao login"/>
    }else{
        buttonImage = <img style={{cursor : 'pointer'}}  onClick={logout} className="kakao_profile" src={profile.thumbnailImageUrl} alt="kakao login"/>
    }
    
    return (
        <div className='buttonArea'>
            {buttonImage}
        </div>
    );
  }
  
  export default KakaoLonginBtn;