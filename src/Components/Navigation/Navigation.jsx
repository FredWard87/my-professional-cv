import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, Work, School, Code, Email } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Inicio', icon: <Home />, path: '/' },
  { label: 'Experiencia', icon: <Work />, path: '/experience' },
  { label: 'Educación', icon: <School />, path: '/education' },
  { label: 'Habilidades', icon: <Code />, path: '/skills' },
  { label: 'Contacto', icon: <Email />, path: '/contact' },
];

const Navigation = () => {
  const location = useLocation();
  
  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000,
        display: { xs: 'block', md: 'none' }
      }} 
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={navItems.findIndex(item => item.path === location.pathname)}
        sx={{ backgroundColor: 'primary.main' }}
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.label}
            icon={
              <motion.div whileHover={{ scale: 1.1 }}>
                {item.icon}
              </motion.div>
            }
            component={Link}
            to={item.path}
            sx={{ 
              color: 'white',
              '&.Mui-selected': {
                color: 'secondary.main'
              }
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;