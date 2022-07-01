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
            Recycle Better:
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}> Our Goal: Everything that can get recycled goes into the Blue Bin. Whatever could get the Blue Bin banished to trash stays out.  Click here for a Guide.
.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our goal is to get every recyclable material into a blue bin WITHOUT including any nonrecyclables that can get the entire content banished to the trash. Click here for a guide to the most impactful things to put in and leave out.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Recycle Bigger</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Beyond the Bin, there’s a whole world of Recycling Opportunities for plastic wrap, plastic mailers, food waste, batteries, and more!  Click here for a Guide.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There's a whole world of recycling opportunities beyond the blue bin. Plastic wrap & plastic mailers, batteries, food waste, and more! Click here for a guide.
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
            Recycle DC
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          We can do even more as a city than we can do one-by-one.  Next-Gen Progress comes from advocacy, enforcement, and regulations. Click here to Connect.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <img src={testImage}></img> */}
          <Typography>
          There's only so much anyone can do on their own. Next-generation progress comes from enforcement, advocacy, and regulations. Click here to connect
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
