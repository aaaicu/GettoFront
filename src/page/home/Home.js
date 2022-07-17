import Header from '../../layout/Header';
import Body from '../../layout/Body';
import Footer from '../../layout/Footer';
import Nav from '../../layout/Nav';
import { useSelector } from 'react-redux';

function Home() {
    const accessToken = useSelector(state => state.profile);
    console.log(accessToken);

    return (
        <div className="App">
            <Header/> 
            <Nav/> 
            <Body/>
            <Footer/>
        </div>
    )
}


export default Home;