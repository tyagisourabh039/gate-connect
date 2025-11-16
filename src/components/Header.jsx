import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router';

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const tabs={
    users:'Users',
    partners:'Partners',
    roles:'Roles',
  }
  const [activeTab, setActiveTab] = React.useState(tabs.users);
  const paths={
    root:'/',
    users:'/users',
    partners:'/partners',
    roles:'/roles'
  }
  const location=useLocation();
  React.useEffect(()=>{
    console.log(location.pathname)
    console.log(activeTab)
  function getActiveTab(pathName){
  switch(pathName){
    case paths.users:
      changeTab(tabs.users);
      break;
    case paths.partners:
      changeTab(tabs.partners);
      break;
    case paths.roles:
      changeTab(tabs.roles);
      break;
    default:
        navigate('/users');

  }
}
  getActiveTab(location.pathname)
  },[location.pathname])
  

  function changeTab(tabName){
      setActiveTab(tabName);

  }
  const navigate =useNavigate();
  function handleClick(path){
    path=path.toString().toLowerCase();
    navigate(`/${path}`);
    // navigate("/dashboard", { state: { userId: 123 }, replace: true });
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List sx={{display:'flex',flexDirection:'column'}}>
        <Button onClick={()=>handleClick(tabs.users)} key={tabs.users} sx={{ color:activeTab==tabs.users?'white':'black' }}>
                {tabs.users}
              </Button>
               <Button onClick={()=>handleClick(tabs.partners)} key={tabs.partners} sx={{ color:activeTab==tabs.partners?'white':'black' }}>
                {tabs.partners}
              </Button>
               <Button onClick={()=>handleClick(tabs.roles)} key={tabs.roles} sx={{ color:activeTab==tabs.roles?'white':'black' }}>
                {tabs.roles}
              </Button>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
<>
      <AppBar component="nav" sx={{ position: 'relative',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          Gate Connect
          </IconButton>
         
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
              <Button onClick={()=>handleClick(tabs.users)} key={tabs.users} sx={{ color:activeTab==tabs.users?'white':'black',borderBottom:'2px solid transparent',borderColor:activeTab==tabs.users?'white':'transparent',borderRadius:'0px' }}>
                {tabs.users}
              </Button>
               <Button onClick={()=>handleClick(tabs.partners)} key={tabs.partners} sx={{ color:activeTab==tabs.partners?'white':'black',borderBottom:'2px solid transparent',borderColor:activeTab==tabs.partners?'white':'transparent',borderRadius:'0px' }}>
                {tabs.partners}
              </Button>
               <Button onClick={()=>handleClick(tabs.roles)} key={tabs.roles} sx={{ color:activeTab==tabs.roles?'white':'black',borderBottom:'2px solid transparent',borderColor:activeTab==tabs.roles?'white':'transparent',borderRadius:'0px' }}>
                {tabs.roles}
              </Button>
            
          </Box>
         
        </Toolbar>
         <IconButton
            color="inherit"
            sx={{ display: { xs: 'none', sm: 'block' },mr: 2 }}
          >
           Gate Connect
        
          </IconButton>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,background:'#1976d2'  },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
</>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
