import { Box, Typography, Link, IconButton } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, bgcolor: 'primary.main', color: 'white' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
        <IconButton 
          color="inherit" 
          href="https://github.com/tu-usuario" 
          target="_blank"
        >
          <GitHub />
        </IconButton>
        <IconButton 
          color="inherit" 
          href="https://linkedin.com/in/tu-usuario" 
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
        <IconButton color="inherit" href="mailto:tu@email.com">
          <Email />
        </IconButton>
      </Box>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Todos los derechos reservados
      </Typography>
    </Box>
  )
}

export default Footer