import { Accordion,AccordionSummary,AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const MuiAccordian = () => {
    let [expanded,setExpanded]=useState<String|false>(false);
    let handleChande=(isExpanded:boolean,panel:string)=>{
        setExpanded(isExpanded?panel:false);
    }
  return (
    <div>
        <Accordion expanded={expanded==="panel1"} onChange={(e,isExpanded)=>handleChande(isExpanded,"panel1")}>
            <AccordionSummary id="panell-content" aria-controls="Content" expandIcon={<ExpandMoreIcon/>}>
           <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fuga nulla provident, dolor ullam ipsa voluptas animi. Praesentium in dolores, alias exercitationem harum labore repellat eveniet modi excepturi quisquam similique.</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded==="panel2"} onChange={(e,isExpanded)=>handleChande(isExpanded,"panel2")}>
            <AccordionSummary id="panell-content" aria-controls="Content" expandIcon={<ExpandMoreIcon/>}>
           <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fuga nulla provident, dolor ullam ipsa voluptas animi. Praesentium in dolores, alias exercitationem harum labore repellat eveniet modi excepturi quisquam similique.</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded==="panel3"} onChange={(e,isExpanded)=>handleChande(isExpanded,"panel3")}>
            <AccordionSummary id="panell-content" aria-controls="Content" expandIcon={<ExpandMoreIcon/>}>
           <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fuga nulla provident, dolor ullam ipsa voluptas animi. Praesentium in dolores, alias exercitationem harum labore repellat eveniet modi excepturi quisquam similique.</Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordian