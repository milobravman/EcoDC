import "./App.css"
// import Menu from './Menu';
import EmailForm from './Components/EmailForm';
import LandingPage from './Components/LandingPage';
import { Button } from "@mui/material";


function Home() {
    return (
        <>
            <header className="App-header">
                {/* <Menu id= "menu" className="App-head"/> */}
                <Button id="homeButton" onClick={console.log("hi")}>HOME</Button>
                <h3 id= "title" className='App-head'>Eco Dc</h3>
            </header>
            <LandingPage/>
            <EmailForm />
        </>
    )
}

export default Home