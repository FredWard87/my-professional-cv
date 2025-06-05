import { AppBar, Toolbar, Typography, Avatar, Box, useScrollTrigger } from '@mui/material';
import { motion } from 'framer-motion';
import ProfessionalPhoto from '../../assets/images/professional-photo.jpg';

const Header = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: trigger ? 'rgba(46, 59, 85, 0.95)' : 'primary.main',
        transition: 'background-color 0.3s ease',
        boxShadow: trigger ? 3 : 0,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar 
            src={ProfessionalPhoto} 
            alt="Foto profesional" 
            sx={{ 
              width: 56, 
              height: 56,
              border: '2px solid white',
            }}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
          />
          <Typography variant="h6" component="div">
            Tu Nombre
          </Typography>
        </Box>
        <Typography variant="subtitle1" component="div">
          Profesión / Especialidad
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;