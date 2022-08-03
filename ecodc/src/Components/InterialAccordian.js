import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><span className='bold underline'>Food waste</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='red underline'> Keep food out of the landfill</span>
            <span>! Composting produces significantly less greenhouse gas AND puts nutrients back in the soil. </span>
            <ol>
                <li>DC offers free food waste drop-offs at 10 farmer's markets around the city. <a href='https://dpw.dc.gov/foodwastedropoff'>https://dpw.dc.gov/foodwastedropoff</a></li>
                <li> The DC farmer's market program does not accept meat or dairy scraps.  Commercial composters do and will also pick up your food waste from your residence, for a fee.  I use Veteran Compost</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography> <span className='bold underline'>Flexible plastic</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span > You CAN recycle all kinds of flexible plastic—</span>
            <span className='red underline'>but NOT in the blue bin</span>
            <span>.  Clean plastic bags, Ziplocs, wrappers, plastic Amazon mailers, and drycleaner bags are recyclable at many spots around the city!  Grocery stores (Safeway, Giant, and Target) are the most common drop-off spots. Usually there is a big bin near one of the doors where you can drop off your</span>
            <span className='green'> clean</span>
            <span> plastic film. <a href='https://bagandfilmrecycling.org/'>https://bagandfilmrecycling.org/</a> for a drop-off directory</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography> <span className='bold underline'>Yard waste</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='red underline'> Keep yard waste out of the landfill</span>
            <span>! Composting produces significantly less greenhouse gas AND puts nutrients back in the soil. DC does collect yard waste and the service is free, but it is by appointment only. <a href='https://dpw.dc.gov/yard-waste'>https://dpw.dc.gov/yard-waste</a></span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography> <span className='bold underline'>Batteries and more</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span>Moms Organic Market accepts batteries, cork, shoes, eyeglasses, cell phones & tablets, as well as organic waste.  Downside: It's in Arlington and I don't know how to do this, except by car.<a href='https://momsorganicmarket.com/recycle-center/'>https://momsorganicmarket.com/recycle-center/</a></span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography> <span className='bold underline'>Glass</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='green'>Twist</span>
            <span>!  While glass is allowed in the blue bin, it isn't actually recycled. Instead, it's used as a methane-blocking daily cover in the landfill. Not a bad choice. But, you can also recycle your glass in Arlington. <a href='https://www.arlingtonva.us/Government/Programs/Recycling-and-Trash/Locations/Quincy-Park-Recycling-Drop-Off-Center'>https://www.arlingtonva.us/Government/Programs/Recycling-and-Trash/Locations/Quincy-Park-Recycling-Drop-Off-Center</a></span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography><span className='bold underline'>Paint</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span>This is kind of a niche product for most recyclers, but you can recycle paint. Pretty cool.<a href='https://www.paintcare.org/states/district-of-columbia/'>https://www.paintcare.org/states/district-of-columbia/</a></span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}