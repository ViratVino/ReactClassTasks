import { Box, Paper } from "@mui/material";
import { Masonry } from "@mui/lab";

const height=[150,30,30,45,65,43,56,33,56,78,54,130]
const MuiMasentry = () => {
  return (
    <Box sx={{width:500,minHeight:400}}>
     <Masonry columns={4} spacing={1}>
        {
            height.map((height,index)=>{
                return(
                    <Paper
                    key={index}
                    sx={{display:"flex",justifyContent:'center',alignItems:'center',height:height,border:'1px solid'}}
                    
                    >
                         {index+1}
                    </Paper>
                )
            })
        }
     </Masonry>
    </Box>
  )
}

export default MuiMasentry