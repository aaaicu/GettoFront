import { API_HOST } from "../../../component/oauth/OAuthUrl";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { SET_LOGIN, SET_LOGOUT } from '../../../component/oauth/Auth';
import { api } from "../../../component/CustomAxios";
import axios from "axios";


function KakaoAuthHandler() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveToken = function(data) {
    dispatch(SET_LOGIN(data));
    api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
    return navigate("/");
  };

  const deleteToken = function() {
    dispatch(SET_LOGOUT());
    // axios.defaults.headers.common['Authorization'] = '';
  };

    return (
        <div >
            { callback(saveToken, deleteToken) }
        </div>
    )
}

let callback = function (successCallbackFunc, failCallbackFunc){
    
// 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  if(code==null || code === ""){
    return failCallbackFunc();
  }


  axios.get(`${API_HOST}/oauth/kakao?code=${code}`)
  .then((res) =>{
    successCallbackFunc(res.data);
  })
}

export default KakaoAuthHandler;