import React from 'react';
import { Container, Paper } from '@mui/material';

import Background from '../../../assets/images/background.png'; 


const LayoutContainer: React.FC = ({ children }) => {
  return (
    <Paper
      className="background"
      sx={{ backgroundImage: `url(${ Background })` }}
    >
      <Container maxWidth="xl" className="layoutContainer">
        {children}
      </Container>
    </Paper>
  );
}

export default LayoutContainer;