import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import testImage from './logo192.png'
import InteralAccordian from './InterialAccordian'
import More from './InternialAccordian2'

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
          <span className='bold underline large'>Recycle Better</span>
          </Typography>
          <Typography > 
            <span className='regular '> The Goal: </span>
            <span className='regular blue'>Everything that </span>
            <span className='regular blue bold underline'>can</span>
            <span className='regular blue'> get recycled goes into the Blue Bin. </span>
            <span className='regular red'>Whatever could get the Blue Bin</span>
            <span className='regular red bold italics'> banished to trash </span>
            <span className='regular red'>stays out</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* test goes here */}
            <div>
              <span className='underline bold' id ='keep'> Keep non-recyclables out of your blue bin.</span>
              <span className='italics bold' id ='non-r'> Non-recyclables spoil the bin AND MAYBE THE WHOLE TRUCK!</span>
            </div>
            <div>
              <h3 className='green'>Goes in!</h3>
              <ol>
                <li>
                  <span className='bold'> The usual stuff: </span>
                  <span>paper, cardboard, metal, plastic bottles & jugs, milk cartons, glass </span>
                </li>
                <li>
                  <span className='bold'> Pizza boxes </span>
                  <span>(first remove crusts and small plastic items—grease is fine!)</span>
                </li>
                <li>
                  <span className='bold'> All junk mail, </span>
                  <span>even the glossy stuff</span>
                </li>
                <li>
                  <span className='bold'>Paper towel and toilet paper rolls</span>
                  <span></span>
                </li>
                <li>
                  <span className='bold'>Coffee cups </span>
                  <span>(plastic lids removed) </span>
                </li>


                <li>
                  <span className='bold'> Any rigid plastic </span>
                  <span >that isn't #3, any color </span>
                </li>
                <li>
                  <span className='bold'> Plastic bottle caps</span>
                  <span> (just put them back on bottle)</span>
                </li>
              </ol>
            </div>
            <div>
              <h3 className='red'>Stays out!</h3>
              <ol>
                <li>
                  <span className='bold'> Plastic bags. </span>
                  <span> If it's in a plastic bag, it gets trashed.</span>
                </li>
                <li>
                  <span className='bold'> Wet cardboard. </span>
                  <span> If it's wet, it gets trashed.</span>
                </li>
                <li>
                  <span className='bold'>  Flexible plastic. </span>
                  <span>If it's plastic wrap or dry cleaning bags, it gets trashed. </span>
                </li>
                <li>
                  <span className='bold'> Anything smaller than 2x2 inches.</span>
                </li>
                <li>
                  <span className='bold underline'> Anything you're unsure of</span>
                  <span className='otherBlue'>. Don't guess, When in doubt, throw it out.</span>
                </li>
              </ol>
            </div>
            <More/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <span className='bold underline large'>Recycle Bigger</span>
          </Typography>
           
          <Typography >
            <span className='regular green bold'>Beyond the bin, </span>
            <span className='regular'>there's a whole world of opportunities to recycle </span>
            <span className='regular green'>food waste, </span>
            <span className='regular blue'>flexible plastic, </span>
            <span className='regular green'>yard waste, </span>
            <span className='regular blue'>paint, </span>
            <span className='regular green'>glass, </span>
            <span className='regular blue'>batteries, and more!</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <InteralAccordian/>
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
          <span className='bold underline large'>Recycle DC</span>
          </Typography>
          <Typography>
            <span className='regular '>We can do much more as a city than we can do one-by-one. </span>
            <span className='regular bold green'>Next-Gen Progress </span>
            <span className='regular '>comes from advocacy, enforcement, and regulations.</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <img src={testImage}></img> */}
          <Typography>
            {/* test goes here */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
