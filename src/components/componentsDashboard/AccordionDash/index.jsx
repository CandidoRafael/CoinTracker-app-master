import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const AccordionDash = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize: '1.1em', fontWeight: 'bold'}}>Qual é o tipo de investimento mais seguro?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize: '1.1em'}}>
          Treasury bonds
          Treasury bonds (or T-bonds) are classified as a “risk-free” investment,
          as they are issued by the US federal government, theoretically the safest
          issuer in the world.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize: '1.1em', fontWeight: 'bold'}}>Quanto eu devo investir?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize: '1.1em'}}>
          35%. For investments and other forms of savings, it may seem like a lot, but this is essential for you to have effective financial security.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{fontSize: '1.1em', fontWeight: 'bold'}}>O que é Tesouro Direto?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          oi
        </AccordionDetails>
      </Accordion>
    </div>
  );
}