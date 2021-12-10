import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROOT } from '../../utils/constants/routes';

const NotFound: React.FC = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" height="100%">
      <Grid item textAlign="center">
        <Typography variant="h1" component="h1">
          <b>Sorry,</b> 😓
        </Typography>
        <Typography variant="h4" component="h2" marginY={4}>This page doens't exist!</Typography>
        <Link to={ROOT} style={{ textDecoration: 'none' }}>
          <Button variant="contained">Return to home</Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default NotFound;