import Header from '../../layout/Header';
import Body from '../../layout/Body';
import Footer from '../../layout/Footer';
import Nav from '../../layout/Nav';
import { useSelector } from 'react-redux';
import { api } from '../../component/CustomAxios';


function Home() {
    const profile = useSelector(state => state.profile);
    console.log(profile)
    console.log(api.defaults.headers.common);
    
    return (
        <div className="App">
            <Header/> 
            <Nav/> 
            <Body/>
            <Footer/>
            <button onClick={ test}>sss</button>
            <button onClick={ test1}>test</button>
        </div>
    )
}
const test = async () => {
    api.get('/auth/reissue').then();
    
}
const test1 = async () => {
    api.get('/auth').then();
    
}
export default Home;