import Cards from './MuiCards.js'
import Grid from '@mui/material/Grid';


function LandingPage() {
    
    return(
        <>
            <h3 id = "LandingTitle">Pick Your Battle, Then Keep It Simple</h3>
            <Grid container justifyContent="center">
                <Cards justifyContent="center" />
            </Grid>

        </>
    )
}

export default LandingPage;




 
