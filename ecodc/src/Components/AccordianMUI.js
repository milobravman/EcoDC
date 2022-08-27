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
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <span className='bold underline large'>Recycle Better</span>
          </Typography>
          <Typography > 
            {/* <span className='regular '> The Goal: </span>
            <span className='regular blue'>Everything that </span>
            <span className='regular blue bold underline'>can</span>
            <span className='regular blue'> get recycled goes into the Blue Bin. </span>
            <span className='regular red'>Whatever could get the Blue Bin</span>
            <span className='regular red bold italics'> banished to trash </span>
            <span className='regular red'>stays out</span> */}
            <span className='underline bold regular blue' id ='keep'> Keep non-recyclables out of your blue bin.</span>
            <span className='italics bold regular red' id ='non-r'> Non-recyclables spoil the bin AND MAYBE THE WHOLE TRUCK!</span>

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* test goes here */}
              <audio id='recycleAudio' src='audio/ecoDc_audio.mp3' controls>
              </audio>
            <div id = "AccMui-goesIn-div">
              <h3 className='green'>Goes in!</h3>
              <ol>
                <li>
                  <span className='bold'> The usual stuff: </span>
                  <span>paper, cardboard, aluminum or tin cans, plastic bottles & jugs, milk cartons, glass. Needs to be reasonably clean.</span>
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
                  <span className='bold'>Paper towel rolls and toilet paper rolls</span>
                  <span></span>
                </li>
                <li>
                  <span className='bold'>Coffee cups </span>
                  <span>(plastic lids removed) </span>
                </li>


                <li>
                  <span className='bold'> Any rigid plastic </span>
                  <span >that isn't #3, including most takeout containers and shampoo bottles, of any color. <a href='./images/ridged_plastic.jpg' target="_blank">See Pictures</a> </span>
                </li>
                <li>
                  <span className='bold'> Plastic bottle caps</span>
                  <span> (just put them back on bottle)</span>
                </li>
              </ol>
            </div>
            {/* <div id="photoHolder">
              <h5 id="photoCycleTitle">Ridged Plastic</h5>
              <img id="cyclePhoto" src="./images/ridged_plastic.jpg" alt=''></img>
            </div> */}
            <div>
              <h3 className='red'>Stays out!</h3>
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
                  <span className='otherBlue'>. Don't guess! When in doubt, throw it out.</span>
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
