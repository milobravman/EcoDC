import { Button } from "@mui/material"
import "../App.css"
import Info from "./AccordianMUI"


function Recycle() {

    const goHome = () => {
        window.location.href = '/EcoDC'
    }

    return (
        <>
            <header className="App-header">
                <Button id="homeButton" onClick={goHome}>HOME</Button>
                <h3 id= "title" className='App-head'>Eco Dc</h3>
            </header>
            <h2 id = "Recycling-page-title" className="sub-title">Recycling In DC</h2>
            <Info/>
        </>
    )
}

export default Recycle