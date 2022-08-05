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
                    image="/images/park.png"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Water
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Streams
                        Rivers + streams
                    </Typography>
                    </CardContent>
                
                <CardActions>
                    <Button size="small" color="primary">
                    Learn more
                    </Button>
                </CardActions>
                </Card>

                <Card className="float-child" sx={{ maxWidth: 345, minWidth: 345 }}>
            
                    <CardMedia
                    component="img"
                    height="200"
                    image="/images/emissions.png"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Climate Change
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Renewable energy

                        Lower carbon footprint
                    </Typography>
                    </CardContent>
                
                <CardActions>
                    <Button size="small" color="primary">
                    Learn more
                    </Button>
                </CardActions>
                </Card>
                <Card className="float-child" sx={{ maxWidth: 345, minWidth: 345 }}>
            
                    <CardMedia
                    component="img"
                    height="250"
                    image="/images/greenery.png"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Greenery
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Trees
                        Garden/Yards
                        Parksd
                    </Typography>
                    </CardContent>
                
                <CardActions>
                    <Button size="small" color="primary">
                    Learn more
                    </Button>
                </CardActions>
                </Card>

                <Card className="float-child" sx={{ maxWidth: 345, minWidth: 345 }}>
                    <CardMedia
                    component="img"
                    height="250"
                    image="/images/recycling_can.jpg"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Waste
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Recycling
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
                    image="/images/water.png"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Outdoor Life
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        bike paths
                        Bulk Board
                    </Typography>
                    </CardContent>
                
                <CardActions>
                    <Button size="small" color="primary">
                    Learn more
                    </Button>
                </CardActions>
                </Card>
        </Grid>        


  );
}
