import { Box,Card,CardContent, Typography,CardActions,Button, CardMedia } from "@mui/material"

const MuiCard = () => {
  return (
    <Box width={"300px"}>
        <Card>
            <CardMedia component={"img"} height={"140"} image="red" alt="Etho Oru Image"></CardMedia>
            <CardContent >
                <Typography gutterBottom variant="h5" component={"div"}>
                    React
                </Typography>
                <Typography variant="body2" color={"text.secondary"}>
                    reactdfghjk dfghjkl sdfgh jdbvjbr my name is Vinoth Kumar I am from Tamilnadu Dindigul

                </Typography> 
             

            </CardContent>
            <CardActions> <Button size="small">Share</Button>
             <Button variant="contained">Learn mOre</Button></CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard