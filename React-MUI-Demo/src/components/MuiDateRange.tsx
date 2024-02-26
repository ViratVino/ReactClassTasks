import { DateRange,DateRangePicker } from "@mui/icons-material"
import { Box, TextField } from "@mui/material"
const MuiDateRange = () => {
  return (
    <Box>
        <DateRangePicker startText="check IN" endText="CheckOut" renderInput={(startProp,endProp)=>{
            return (<>
            <TextField {...startprop}></TextField>
            <TextField></TextField>
             </>)
        }}/>
    </Box>
  )
}

export default MuiDateRange