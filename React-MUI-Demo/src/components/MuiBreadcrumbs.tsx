import { Box,Breadcrumbs,TextField,Link, Typography } from "@mui/material"
const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs aria-label="breadcrumb" separator='>' maxItems={3} itemsBeforeCollapse={2}>
         <Link underline="hover" href="#">Home</Link>
         <Link underline="hover" href="#">Catalog</Link>
         <Link underline="hover" href="#">Accessories</Link>
        <Typography variant="h6" color={"text.primary"}>Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs