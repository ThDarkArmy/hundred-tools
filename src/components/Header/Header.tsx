// import { styled} from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';

// const drawerWidth = 240;


// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));



// export default function Header() {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" elevation={0} sx={{bgcolor: "#333"}}>
//         <Toolbar>
//           <Typography sx={{cursor: "pointer"}} onClick={()=> navigate("/")} variant="h6" noWrap component="div">
//             Hundred Tools
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface HeaderProps {
  pageTopic?: string;
}

const Header: React.FC<HeaderProps> = ({ pageTopic }) => {
  return (
    <AppBar position="static" elevation={0} sx={{bgcolor: "#ccc"}}>
      <Toolbar style={{height: "50px"}}>
        <Typography
          variant="h6"
          component={Link} // Use Link component from React Router
          to="/" // Link to the home page
          sx={{ cursor: 'pointer', color: "#fff", textDecoration: "none" }} // Add cursor style
        >
          Hundred Tools
        </Typography>
        <Typography sx={{ml: "auto"}} variant="h6" component="div">
          {pageTopic}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
