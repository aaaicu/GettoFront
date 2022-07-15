import Header from '../../layout/Header';
import Body from '../../layout/Body';
import Footer from '../../layout/Footer';
import Nav from '../../layout/Nav';

function Home() {
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