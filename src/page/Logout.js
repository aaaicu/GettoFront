import { useDispatch } from "react-redux";
import { api } from "../common/axios/customAxios";
import { SET_LOGOUT } from "../component/oauth/Auth";

function Logout() {
    // const accessToken = useSelector(state => state.authToken);
    // console.log('userselect', accessToken)

    const dispatch = useDispatch();

    const logout = function (){
        dispatch(SET_LOGOUT());
        api.defaults.headers.common['Authorization'] = null;
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <div>
            {logout()}
        </div>
    )
}


export default Logout;