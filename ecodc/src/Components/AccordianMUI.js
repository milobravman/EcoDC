import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import testImage from './logo192.png'
import InteralAccordian from './InterialAccordian'
import More from './InternialAccordian2'
import { color } from '@mui/system';
import { green } from '@mui/material/colors';



export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    var recycleAudio = document.getElementById("recycleAudio");
    if (panel === "panel1" && isExpanded === true){
      recycleAudio.play();
    }
    if (panel === "panel1" && isExpanded === false){
      recycleAudio.pause();
    }

  };

  const changePicture = () => {
    document.getElementById("cyclePhoto").src = "./images/flexable_plastic.jpg"
    document.getElementById("photoCycleTitle").innerHTML = "Flexible Plastic"
  }

  return (
    <div id ="Recycle-Info">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <Typography sx={{ width: '33%', flexShrink: 0, marginTop: '60px', marginBottom: '60px' }}>
              <span className='bold underline large'>Recycle Better</span>
            </Typography>
            <Typography sx={{ marginTop: '60px', marginBottom: '60px', fontSize: 22}}> 
              {/* <span className='underline bold regular blue' id ='keep'> Keep non-recyclables out of your blue bin.</span>
              <span className='italics bold regular red' id ='non-r'> Non-recyclables spoil the bin AND MAYBE THE WHOLE TRUCK!</span> */}
              DC's recycling system is only as good as what we put into it. Learn what goes in and what stays out. It's worth the effort!
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* test goes here */}
              {/* <audio id='recycleAudio' src='audio/ecoDc_audio.mp3' controls>
              </audio> */}
              <h3 className='green'>Goes in!</h3>
              <Typography className='green' sx={{fontSize: '22px'}}>
                 Put in the stuff that our recycling system can safely and effectively turn into materials for reuse. 
              </Typography>
            <div id = "AccMui-goesIn-div">
              <ol>
                <li>
                  <span className='bold'>Paper:</span>
                  <span> paper bags, newspaper, junk mail (including glossy mailers), non-padded envelopes (including the ones with plastic windows), paperback and hardback books, magazines & catalogues.</span>
                </li>
                <li>
                  <span className='bold'> Cardboard boxes: </span>
                  <span>The system is designed for flattened and dry cardboard, so break them down and keep them from getting rained on.</span>
                </li>
                <li>
                  <span className='bold'>Pizza boxes: </span>
                  <span>Remove crusts and small plastic items—grease is fine! </span>
                </li>
                <li>
                  <span className='bold'>Inner cardboard roll from toilet paper and paper towel rolls.</span>
                  <span> </span>
                </li>
                <li>
                  <span className='bold'>Disposable coffee cups. </span>
                  <span>The system is designed to sort most containers by shape, so don't crush them. (Do remove the plastic lid.)</span>
                </li>
                {/* <li>
                  <span className='bold'> Any rigid plastic </span>
                  <span >that isn't #3, including most takeout containers and shampoo bottles, of any color. <a href='./images/ridged_plastic.jpg' target="_blank">See Pictures</a> </span>
                </li> */}
                <li>
                  <span className='bold'>  Milk (or juice) cartons. </span>
                  <span>Don't crush them.  (Do re-attach the plastic cap).</span>
                </li>
                <li>
                  <span className='bold'> Plastic drink bottles. Plastic soap, detergent, or shampoo bottles. </span>
                  <span> Don't crush them. (Do re-attach their plastic caps). </span>
                </li>
                <li>
                  <span className='bold'> Uncrushed, clean  plastic clamshell containers. </span>
                  <span>Remove the inner pad. See pictures for common examples.   </span>
                </li>
                <li>
                  <span className='bold'> Clean plastic take-out containers. </span>
                  <span> Don't crush.  </span>
                </li>
                <li>
                  <span className='bold'> Aluminum or tin food/drink cans.   </span>
                  <span> Don't crush. No paint cans. </span>
                </li>
              </ol>
            </div>
            {/* <div id="photoHolder">
              <h5 id="photoCycleTitle">Ridged Plastic</h5>
              <img id="cyclePhoto" src="./images/ridged_plastic.jpg" alt=''></img>
            </div> */}
            <h3 className='red'>Stays out!</h3>
            <Typography className='red' sx={{fontSize: '22px'}}>
              Keep out the wrong stuff to prevent contamination, slowdowns, extra costs, and worker injuries.
            </Typography>
            <div>
              <ol>
                <li>
                  <span className='bold'> Plastic bags. </span>
                  <span className='red'>Never put your recycling in a plastic bag!</span>
                </li>
                <li>
                  <span className='bold'> Wet cardboard. </span>
                </li>
                <li>
                  <span className='bold'>  Flexible plastic. </span>
                  <span>If it's smushable like plastic wrap or a tooth paste tube. See Picture </span>
                    <a href='./images/flexable_plastic.jpg' target="_blank">1</a>
                    <span> and </span>
                    <a href='./images/fexable_plastic1.jpg' target="_blank">2</a>

                </li>
                <li>
                  <span className='bold'> Styrofoam. </span>
                </li>
                <li>
                  <span className='bold'> Anything smaller than 2x2 inches.</span>
                  <span> This includes paper, metal or cardboard, because it's too small for the sorter.</span>
                </li>
                <li>
                  <span className='bold underline'> Anything you're unsure of</span>
                  <span className='otherBlue' >. Don't guess! When in doubt, throw it out.</span>
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
          <Typography sx={{ width: '33%', flexShrink: 0, marginTop: '60px', marginBottom: '60px'  }}>
            <span className='bold underline large'>Recycle Bigger</span>
          </Typography>
           
          <Typography sx={{ marginTop: '60px', marginBottom: '60px', fontSize: 22}}>
            <span className='green bold'>Beyond the bin, </span>
            <span>there's a whole world of opportunities to recycle </span>
            <span className='green'>food waste, </span>
            <span className='blue'>flexible plastic, </span>
            <span className='green'>yard waste, </span>
            <span className='blue'>paint, </span>
            <span className='green'>glass, </span>
            <span className='blue'>batteries, and more!</span>
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
          <Typography sx={{ width: '33%', flexShrink: 0, marginTop: '60px', marginBottom: '60px' }}>
          <span className='bold underline large'>Recycle DC</span>
          </Typography>
          <Typography sx={{ marginTop: '60px', marginBottom: '60px', fontSize: 22 }}>
            <span >We can do much more as a city than we can do one-by-one. </span>
            <span className='bold green'>Next-Gen Progress </span>
            <span >comes from advocacy, enforcement, and regulations.</span>
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
