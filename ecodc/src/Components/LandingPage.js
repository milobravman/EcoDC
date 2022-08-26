import Cards from './MuiCards.js'
import Grid from '@mui/material/Grid';


function LandingPage() {
    
    return(
        <>
            <h3 className='LandingTitle' id= "wendypoo">Want to do something for the environment in DC?</h3>
            <h3 className = "LandingTitle">Pick Your Battle, Then Keep It Simple</h3>
            <Grid container justifyContent="center">
                <Cards justifyContent="center" />
            </Grid>

        </>
    )
}

export default LandingPage;




 
