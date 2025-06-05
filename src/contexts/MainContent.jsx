import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from '../pages/Home/Home';
import Experience from '../Components/Sections/Experience/Experience';
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
}

const MainContent = () => {
  const location = useLocation()

  return (
    <motion.main
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />

      </Routes>
    </motion.main>
  )
}

export default MainContent