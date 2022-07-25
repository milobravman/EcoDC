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
            {/* test goes here */}
            <div>
              <span className='underline' id ='keep'> Keep non-recyclables out of your blue bin.</span>
              <span className='italics bold' id ='non-r'> Non-recyclables spoil the bin AND MAYBE THE WHOLE TRUCK!</span>
            </div>
            <div>
              <h3 className='green'>Goes in!</h3>
              <ol>
                <li>
                  <span className='bold'> The usual stuff: </span>
                  <span>paper, cardboard, metal cans, plastic bottles & jugs, milk cartons, glass </span>
                </li>
                <li>
                  <span className='bold'> Pizza boxes </span>
                  <span>(first remove crusts and small plastic items—grease is fine!)</span>
                </li>
                <li>
                  <span className='bold'> Any rigid plastic </span>
                  <span className='bold'>that isn't PVC, any color </span>
                </li>
                <li>
                  <span> Plastic bottle caps</span>
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
                  <span className='bold italics'> Anything you're unsure of. </span>
                  <span> When in doubt, throw it out.</span>
                </li>
              </ol>
            </div>
            <p>Getting this much right is 90% of the bin battle and plenty good enough. If you're obsessive like me, and want to go the extra mile, <a href='https://google.com'>click here for more</a>.</p>

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
              {/* test goes here */}
              <div>
                <span>Food waste: </span>
                <span> Keep food out of the landfill</span>
                <span>! Composting produces significantly less greenhouse gas AND puts nutrients back in the soil. </span>
                <ol>
                  <li>DC offers free food waste drop-offs at 10 farmer's markets around the city. <a href='https://dpw.dc.gov/foodwastedropoff'>https://dpw.dc.gov/foodwastedropoff</a></li>
                  <li> The DC farmer's market program does not accept meat or dairy scraps.  Commercial composters do and will also pick up your food waste from your residence, for a fee.  I use Veteran Compost</li>
                </ol>

              </div>
              <div>
                <span>Flexible plastic:</span>
                <span> You CAN recycle all kinds of flexible plastic—</span>
                <span>but NOT in the blue bin</span>
                <span>.  Clean plastic bags, Ziplocs, wrappers, plastic Amazon mailers, and drycleaner bags are recyclable at many spots around the city!  Grocery stores (Safeway, Giant, and Target) are the most common drop-off spots. Usually there is a big bin near one of the doors where you can drop off your</span>
                <span> clean</span>
                <span> plastic film. <a href='https://bagandfilmrecycling.org/'>https://bagandfilmrecycling.org/</a> for a drop-off directory</span>
              </div>
              <div>
                <span>Yard waste:</span>
                <span> Keep yard waste out of the landfill</span>
                <span>! Composting produces significantly less greenhouse gas AND puts nutrients back in the soil. DC does collect yard waste and the service is free, but it is by appointment only. <a href='https://dpw.dc.gov/yard-waste'>https://dpw.dc.gov/yard-waste</a></span>
              </div>
              <div>
                <span>Batteries and more</span>
                <span>:  Moms Organic Market accepts batteries, cork, shoes, eyeglasses, cell phones & tablets, as well as organic waste.  Downside: It's in Arlington and I don't know how to do this, except by car.<a href='https://momsorganicmarket.com/recycle-center/'>https://momsorganicmarket.com/recycle-center/</a></span>
              </div>
              <div>
                <span>Glass:</span>
                <span>Twist</span>
                <span>!  While glass is allowed in the blue bin, it isn't actually recycled. Instead, it's used as a methane-blocking daily cover in the landfill. Not a bad choice. But, you can also recycle your glass in Arlington. <a href='https://www.arlingtonva.us/Government/Programs/Recycling-and-Trash/Locations/Quincy-Park-Recycling-Drop-Off-Center'>https://www.arlingtonva.us/Government/Programs/Recycling-and-Trash/Locations/Quincy-Park-Recycling-Drop-Off-Center</a></span>
              </div>
              <div>
                <span>Paint</span>
                <span>: This is kind of a niche product for most recyclers, but you can recycle paint. Pretty cool.<a href='https://www.paintcare.org/states/district-of-columbia/'>https://www.paintcare.org/states/district-of-columbia/</a></span>
            </div>
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
            {/* test goes here */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
