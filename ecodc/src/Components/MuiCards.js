import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';




export default function MultiActionAreaCard() {


    const HandleRecycle = (event) =>{
        window.location.href = "/Recycle"
      }
  
    return (
        <Grid 
        container 
        justifyContent="center"
        sx ={{ maxWidth: 1400}}
        >
                <Card className="float-child" sx={{ maxWidth: 345, minWidth: 345 }}>
            
                    <CardMedia
                    component="img"
                    height="250"
                    width="345"
                    image="images/water.png"
                    alt="green iguana"
                    className='inDevelopment'
                    />
                    <span className='inDevTxt'>In Development</span>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Water
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Rivers, Streams, Stormwater 
                    </Typography>
                    </CardContent>
                
                <CardActions>
                    <Button size="small" color="primary" disabled='true'>
                    Learn more
                    </Button>
                </CardActions>
                </Card>

                <Card className="float-child" sx={{ maxWidth: 345, minWidth: 345 }}>
            
                    <CardMedia
                    component="img"
                    height="200"
                    image="EcoDC/images/emissions.png"
                    alt="green iguana"
                    className='inDevelopment'
                    />
                    <span className='inDevTxt'>In Development</span>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Climate Change
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Car Alternatives,
                        Renewable Energy
                    </Typography>
                    </CardContent>
                
                <CardActions>
                    <Button size="small" color="primary" disabled='true'>
                    Learn more
                    </Button>
                </CardActions>
                </Card>
                <Card className="float-child" sx={{ maxWidth: 345, minWidth: 345 }}>
            
                    <CardMedia
                    component="img"
                    height="250"
                    image="EcoDC/images/greenery.png"
                    alt="green iguana"
                    className='inDevelopment'
                    />
                    <span className='inDevTxt'>In Development</span>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Greenery
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Trees,
                        Native & Invasive Plants
                    </Typography>
                    </CardContent>
                
                <CardActions>
                    <Button size="small" color="primary" disabled='true'>
                    Learn more
                    </Button>
                </CardActions>
                </Card>

                <Card className="float-child" sx={{ maxWidth: 345, minWidth: 345 }}>
                    <CardMedia
                    component="img"
                    height="250"
                    image="EcoDC/images/recycling_can.jpg"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Waste
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Recycling, Trash Pick-up
                    </Typography>
                    </CardContent>

                <CardActions>
                    <Button size="small" color="primary" onClick={HandleRecycle}>
                    Learn more
                    </Button>
                </CardActions>
                </Card>

                <Card className="float-child" sx={{ maxWidth: 345 , minWidth: 345}}>
                    <CardMedia
                    component="img"
                    height="250"
                    width="200"
                    image="EcoDC/images/park.png"
                    alt="green iguana"
                    className='inDevelopment'
                    />
                    <span className='inDevTxt'>In Development</span>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Outdoor Life
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Hikes, Bikes, Boating, Fishing
                    </Typography>
                    </CardContent>
                
                <CardActions>
                    <Button size="small" color="primary" disabled='true'>
                    Learn more
                    </Button>
                </CardActions>
                </Card>
        </Grid>        


  );
}
