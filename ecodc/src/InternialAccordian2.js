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
      <Accordion expanded={expanded === 'panel'} onChange={handleChange('panel')}>
        <AccordionSummary aria-controls="paneld-content" id="paneld-header">
          <Typography><span className='bold underline'>Getting this much right is 90% of the bin battle and plenty good enough. If you're obsessive like me, and want to go the extra mile, click here</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 className='large'>Getting around the 2x2 size limit:</h3>
            <ol>
                <li className='regular'>
                    Put small pieces of paper in a paper grocery bag and staple shut.
                </li>
                <li className='regular'>
                    Keep lid attached to metal can when opening.
                </li>
                <li className='regular'>
                    Put smaller plastic items in larger item with the same <span className='underline'>identification number</span>.
                    <br></br>
                    <br></br>
                    <img src='images/recycleIDs.jpg' alt=''/>
                </li>
            </ol>
            <h3 className='large'>Getting answers to items you're unsure of</h3>
            <p>Charlotte Dreizen's twitter feed is all you'll ever need. Read through it or better yet—ask her <a href='https://twitter.com/CharDreizen'>@CharDreizen!</a></p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}