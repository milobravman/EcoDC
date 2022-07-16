import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import testImage from './logo192.png'

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id ="Recycle-Info">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <span className='RecycleBetter'>Recycle Better</span>
          </Typography>
          <Typography > 
            <span id='ourGoal'>Our Goal: </span>
            <span id='Everything'>Everything that</span>
            <span id='can'> can </span>
            <span id='getR'>get recycled goes into the Blue Bin. </span>
            <span id='whatever'>Whatever could get the Blue Bin</span>
            <span id='banished'> banished to trash </span>
            <span id='stays'>stays out</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <span className='RecycleBetter'>Recycle Better</span>
          </Typography>
          <Typography >
            <span id='Beyond'>Beyond the bin, </span>
            <span id='theresa'>there's a </span>
            <span id='wholeworld'>whole world od Recycling Opportunities </span>
            <span id='forplastic'>for plastic wrap, plastic mailers, food waste, batteries, and more!</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <span className='RecycleBetter'>Recycle DC</span>
          </Typography>
          <Typography>
            <span id='Wecan'>We can do even more as a city than we can do one-by-one. </span>
            <span id='Next'>Next-Gen Progress </span>
            <span id='comes'>comes from advocacy, enforcement, and regulations.</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <img src={testImage}></img> */}
          <Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
