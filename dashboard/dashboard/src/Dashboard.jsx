// import React, { useState } from 'react';
// import { IconButton, Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, Avatar, MenuItem, Menu, Collapse } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
// import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
// import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
// import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
// import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
// import { Link, Outlet } from 'react-router-dom';
// import CardForm from './components/emp_card/CardForm';

// const Dashboard = () => {

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
//   const [batchesOpen, setBatchesOpen] = useState(false);

//   const handleSidebarToggle = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const handleProfileMenuOpen = (event) => {
//     setProfileMenuAnchor(event.currentTarget);
//   };

//   const handleProfileMenuClose = () => {
//     setProfileMenuAnchor(null);
//   };

//   const handleBatchesToggle = () => {
//     setBatchesOpen(!batchesOpen);
//   };

//   return (
//     <div className='custom-modal-backdrop'>
//       <div position="static" >
//         <Toolbar>
//           <IconButton edge="start" color="inherit" onClick={handleSidebarToggle}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6">

//           </Typography>
//         </Toolbar>
//       </div>

//       <Drawer open={sidebarOpen} onClose={handleSidebarToggle} PaperProps={{
//         style: {
//           width: "16%", background: "#bdbdbd", backgroundImage: "url('https://wallpaperaccess.com/full/1236512.jpg')", backgroundSize: "cover",
//           backgroundRepeat: 'no-repeat', backgroundPosition: 'center',

//         }
//       }} >
//         <List className='text-slate-300' >

//           <ListItem button onClick={handleProfileMenuOpen} >

//             <img src='./alpha-logo-1.png' alt="Logo" style={{ width: '39px', height: '39px' }} className='mr-3' />
//             <p className='font-black text-alpha-color font-auto'>ALPHA TEAM</p>
//           </ListItem>
//           <hr style={{ margin: '0px 20px', borderColor: 'rgb(30 30 30 / 22%)' }} />

//           <div className='mt-4 '>
//             <ListItem button className="profile-list-item" onClick={handleProfileMenuOpen} style={{ position: 'relative' }}>
//               {/* <Avatar className='mr-2' /> */}
//               <PermIdentityIcon className='mr-2' />

//               <ListItemText primary="My Profile" className='profile' />

//             </ListItem>
//             <hr style={{ margin: '0px 20px', borderColor: '#ff760094' }} />
//           </div>

//           <ListItem button component={Link} to="/" sx={{ marginTop: 2 }} className="transition-transform transform hover:scale-105 hover:shadow-md gap-3">

//             <DashboardSharpIcon />
//             <ListItemText primary="Dashboard" className='' />
//           </ListItem>

//           <ListItem button onClick={handleBatchesToggle} className='gap-3'>

//             <ArticleOutlinedIcon />

//             <ListItemText primary="Batches" className='' />
//             {batchesOpen ? <RemoveOutlinedIcon /> : <ExpandMoreIcon />}
//           </ListItem>

//           <Collapse in={batchesOpen} timeout="auto" unmountOnExit>
//             <List component="div" >
//               <div className="border-l-2 border-gray-300 ">
//                 <ListItem component={Link} to="/assignbatch" className="hover:scale-105 cursor-pointer">
//                   <EditNoteOutlinedIcon />
//                   <ListItemText primary="Assign Batches" />
//                   <NavigateNextSharpIcon className='' />
//                 </ListItem>
//                 <ListItem className="hover:scale-105 cursor-pointer">
//                   <QuizOutlinedIcon />
//                   <ListItemText primary="Check Batches" />
//                   <NavigateNextSharpIcon className='' />
//                 </ListItem>
//               </div>
//             </List>
//           </Collapse>
//           <ListItem button component={Link} to="/empcard" className="transition-transform transform hover:scale-105 hover:shadow-md gap-3">
//           {/* <CardForm sta={sidebarOpen}/> */}
//             <PeopleOutlinedIcon />
//             <ListItemText primary="Employees" className='' />
//             <NavigateNextSharpIcon className='' />

//           </ListItem>
//           {/* <CardForm sta={sidebarOpen}/>  */}
//         </List>
//       </Drawer>

//       {/* Your main content goes here */}
//       <div style={{ marginLeft: sidebarOpen ? "14%" : 0, padding: 20 }}>
//         {/* Content of your dashboard */}

//       </div>
//       <Outlet/>
//     </div >

//   );
// };

// export default Dashboard;

import { RxHamburgerMenu } from "react-icons/rx";
import { createRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  let [val, setVal] = useState(true);
  let [state, setState] = useState({
    symbol: <RxHamburgerMenu />,
    status: true,
  });
  let divRef = createRef(null);
  let displayCard = () => {
    divRef.current.style.left = 0;
    setState({ symbol: <RxCross1 />, status: false });
  };

  let display = () => {
    divRef.current.style.left = 0;
  };
  let removeCard = () => {
    divRef.current.style.left = "-235px";
    setState({ symbol: <RxHamburgerMenu />, status: true });
  };

  let remove = () => {
    divRef.current.style.left = "-235px";
  };
  return (
    <>
      <div id="dashboard">
        <header className="navbar-container">
          <div className="navbar">
            {/* <button onClick={() => { state.status === true ? displayCard() : removeCard() }}>
        
            {state.symbol}
          </button> */}

            <button
              onClick={() => {
                if (val === true) {
                  display();
                  setVal(false);
                } else {
                  remove();
                  setVal(true);
                }
              }}
            >
              {" "}
              {state.symbol}
            </button>
          </div>
        </header>
        <div className="none">
          <div className="sidebar" ref={divRef}>
            <ul>
              <li>
                <a href="">Alpha</a>
              </li>
              <li>
                <a href="">My Profile</a>
              </li>
              <li>
                <Link to="/empcard">Employees</Link>
              </li>
              <li>
                <a href="">Batches</a>
              </li>
            </ul>
          </div>
          <div>
          <div className={val ? "out":"outlet"}>
            <Outlet />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
