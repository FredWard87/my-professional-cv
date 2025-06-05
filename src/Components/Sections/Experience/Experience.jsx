import { Box, Typography, Paper, Divider, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';

const experiences = [
  {
    id: 1,
    position: 'Desarrollador Frontend Senior',
    company: 'Tech Innovators Inc.',
    period: 'Enero 2020 - Presente',
    description: 'Lideré el desarrollo de aplicaciones web utilizando React, TypeScript y MUI. Optimicé el rendimiento reduciendo los tiempos de carga en un 40%.',
    skills: ['React', 'TypeScript', 'MUI', 'Redux', 'Jest']
  },
  {
    id: 2,
    position: 'Desarrollador Full Stack',
    company: 'Digital Solutions LLC',
    period: 'Marzo 2018 - Diciembre 2019',
    description: 'Desarrollé y mantuve aplicaciones web completas con React, Node.js y MongoDB. Implementé características que aumentaron la retención de usuarios en un 25%.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API']
  },
  // Más experiencias...
];

const Experience = () => {
  return (
    <Box sx={{ p: 3, maxWidth: '900px', mx: 'auto' }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Experiencia Profesional
      </Typography>
      
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id}>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <WorkIcon />
              </TimelineDot>
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
                  <Typography variant="h5" component="div">
                    {exp.position}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {exp.company} | {exp.period}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {exp.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.skills.map((skill, i) => (
                      <Chip 
                        key={i} 
                        label={skill} 
                        color="primary" 
                        variant="outlined"
                        component={motion.div}
                        whileHover={{ scale: 1.05 }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Experience;