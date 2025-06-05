import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Bienvenido a mi CV Profesional
      </Typography>
      <Typography variant="body1" paragraph>
        Desarrollador Full Stack con experiencia en React, Node.js y MongoDB
      </Typography>
      <Button 
        component={Link} 
        to="/about" 
        variant="contained" 
        color="primary"
      >
        Conóceme más
      </Button>
    </Box>
  )
}