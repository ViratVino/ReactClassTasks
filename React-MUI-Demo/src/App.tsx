import './App.css'
import { createTheme ,colors} from '@mui/material';
import MuiAlert from './components/MuiAlert'
import MuiAvatar from './components/MuiAvatar'
import MuiBadge from './components/MuiBadge'
import MuiBottomNavigation from './components/MuiBottomNavigation'
import MuiBreadcrumbs from './components/MuiBreadcrumbs'
import MuiChip from './components/MuiChip'
import MuiDrawer from './components/MuiDrawer'
import MuiListItem from './components/MuiListItem'
import MuiLoadingButton from './components/MuiLoadingButton'
import MuiMasentry from './components/MuiMasentry'
// import MuiLink from './components/MuiLink'
// import MuiImageList from './components/MuiImageList'
import MuiNavbar from './components/MuiNavbar'
import MuiResponsiveness from './components/MuiResponsiveness'
import MuiSkeliten from './components/MuiSkeliten'
import MuiSnackbar from './components/MuiSnackbar'
import MuiSpeedDial from './components/MuiSpeedDial'
import MuiTable from './components/MuiTable'
import MuiTabs from './components/MuiTabs'
import MuiTimeline from './components/MuiTimeline'
import MuiTooltip from './components/MuiTooltip'
// import MuiAccordian from './components/MuiAccordian'
// import MuiAutoComplete from './components/MuiAutoComplete'
// import MuiButton from './components/MuiButton'
// import MuiCard from './components/MuiCard'
// import MuiCheckBox from './components/MuiCheckBox'
// import MuiLayOut from './components/MuiLayOut'
// import MuiRadioButton from './components/MuiRadioButton'
// import MuiRating from './components/MuiRating'
// import MuiSelect from './components/MuiSelect'
// import MuiSwitch from './components/MuiSwitch'
// import MuiTextField from './components/MuiTextField'
// import MuiTypography from './components/MuiTypography'

import { ThemeProvider } from '@emotion/react';

const theme=createTheme({
  palette:{
    secondary:{
      main:colors.orange[500]
    }
  }
})
function App() {
   return (
    <>
    <ThemeProvider theme={theme}>
      <div>
        {/* <MuiTypography/> */}
        {/* <MuiButton/> */}
        {/* <MuiTextField/> */}
        {/* <MuiSelect/> */}
        {/* <MuiRadioButton/> */}
        {/* <MuiCheckBox/> */}
        {/* {<MuiSwitch/>}
        <MuiRating/>
        <MuiAutoComplete/> */}
        {/* <MuiLayOut/> */}
        {/* <MuiCard/> */}
        {/* <MuiAccordian/> */}
         {/* <MuiImageList/> */}
         {/* <MuiNavbar/>
         <MuiBreadcrumbs/>
         <MuiDrawer/> */}
         {/* <MuiLink/> */}
         {/* <MuiSpeedDial/> */}
         {/* <MuiBottomNavigation/> */}
         {/* <MuiAvatar/> */}
         {/* <MuiBadge/> */}
         {/* <MuiListItem/> */}
         {/* <MuiChip /> */}
         {/* <MuiTooltip/> */}
         {/* <MuiTable/> */}
         {/* <MuiAlert/> */}
         {/* <MuiSnackbar/> */}
         {/* <MuiSkeliten/> */}
         {/* <MuiLoadingButton/> */}
         {/* <MuiTabs/> */}
         {/* <MuiTimeline/> */}
         {/* <MuiMasentry/> */}
         <MuiResponsiveness/>
       </div>
       </ThemeProvider>

    </>
  )
}

export default App
