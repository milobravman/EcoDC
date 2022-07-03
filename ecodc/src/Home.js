import "./App.css"
import Menu from './Menu';

function Home() {

    var handleover = () => {
        console.log("over");
    }
    var handlemouseleave = (event) => {
        console.log("out");
        event.target.Color = "red";
    }

    return (
        <>
        <header className="App-header">
            <Menu id= "menu" className="App-head"/>
            <h3 id= "title" className='App-head'>Eco Dc</h3>
        </header>
        <div
         id= "testing-hover"
         onMouseEnter={handleover}
         onMouseLeave={handlemouseleave}
        >
            <strong>Here!</strong>
        </div>
        </>

    )
}

export default Home