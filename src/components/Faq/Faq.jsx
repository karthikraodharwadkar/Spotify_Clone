import React from 'react'
import "./Faq.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq() {
  return (
    <div className='faq-container'>
        <div className='faq-header'>
            FAQs
        </div>
        <div className='faq-accordions'>
        <Accordion style={{margin:"10px",borderRadius:"10px",border:"1px solid #FFFFFF",width:"100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"#34C94B",fontSize:"40px",fontWeight:"900"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{background:"#121212",borderRadius:"10px",border:"1px solid #FFFFFF"}}
        >
          <Typography style={{color:"#FFFFFF",fontSize:"20px",fontWeight:"500"}}>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"#121212",fontSize:"18px",fontWeight:"500"}}>
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{margin:"10px",borderRadius:"10px",border:"1px solid #FFFFFF",width:"100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"#34C94B",fontSize:"40px",fontWeight:"900"}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{background:"#121212",borderRadius:"10px",border:"1px solid #FFFFFF"}}
        >
          <Typography style={{color:"#FFFFFF",fontSize:"20px",fontWeight:"500"}}>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"#121212",fontSize:"18px",fontWeight:"500"}}>
          Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    </div>
  )
}
