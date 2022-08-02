import "./App.css"
import Menu from './Menu';
import EmailForm from './EmailForm';
import LandingPage from './LandingPage'

function Home() {
    return (
        <>
            <header className="App-header">
                {/* <Menu id= "menu" className="App-head"/> */}
                <h3 id= "title" className='App-head'>Eco Dc</h3>
            </header>
            <LandingPage/>
            <EmailForm/>
        </>
    )
}

export default Home