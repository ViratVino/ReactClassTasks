import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';


import { ThemeProvider, createTheme } from '@mui/material/styles';


import AppAppBar from './components/AppAppBar';

import getLPTheme from './getLPTheme';



const defaultTheme = createTheme();



export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };



  return (
    <>
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
  
    </ThemeProvider>
    {/* <Outlet/> */}
    </>
  );
}