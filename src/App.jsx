import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import MainContent from './contexts/MainContent'
import Footer from './components/Footer/Footer'

const theme = createTheme({
  palette: {
    primary: { main: '#2E3B55' },
    secondary: { main: '#FF6B6B' },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#333333',
      secondary: '#555555'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 600, fontSize: '2rem' }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/my-professional-cv">
        <div className="app-container">
          <Header />
          <Navigation />
          <AnimatePresence mode="wait">
            <MainContent />
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App