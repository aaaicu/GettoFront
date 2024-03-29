import Header from '../../layout/Header';
import Body from '../../layout/Body';
import Footer from '../../layout/Footer';
import Nav from '../../layout/Nav';
import { useDispatch } from 'react-redux';
import { SET_LOGIN } from '../../component/oauth/Auth';
import { api } from '../../common/axios/customAxios';

function Home() {
    const dispatch = useDispatch();

    const test = async () => {
        api.get('/auth/reissue?refreshToken='+localStorage.getItem('refreshToken')).then((res) =>{
            api.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
            dispatch(SET_LOGIN(res.data));
            localStorage.setItem('refreshToken', res.data.refreshToken)
        });
    }
    const test1 = async () => {
        api.get('/api/hello').then((res) =>  console.log(res));
    }

    return (
        <div className="App">
            <Header/> 
            {/* <Nav/>  */}
            <Body/>
            <Footer/>

            <script>
            /* 참고소스 : https://github.com/marshallku/React-Lottery-App */
            </script>
            {/* <button onClick={ test}>sss</button>
            <button onClick={ test1}>test</button> */}
        </div>
    )
}

export default Home;