import React from 'react';
import { Box, Button, Dialog, DialogContent, DialogContentText, Grid, Typography } from '@mui/material';

import shadow from '../../../assets/images/shadow.png';

import netflix from '../../../assets/images/streamers/netflix-white.png';
import primeVideo from '../../../assets/images/streamers/signature/primeVideo.png';
import globoplay from '../../../assets/images/streamers/globoplay.png';
import premiere from '../../../assets/images/streamers/premiere.png';
import conmebol from '../../../assets/images/streamers/conmebol.png';

interface ISignaturePlanModalProps {
  isOpenModal: boolean,
  handleModalClose?: React.MouseEventHandler<HTMLButtonElement>,
  platformId: 0 | 1 | 2 | 3 | 4 | number,
  movieTitle: string,
}

const SignaturePlanModal: React.FC<ISignaturePlanModalProps> = ({ isOpenModal, handleModalClose, movieTitle, platformId }) => {

  let platform;
  let label;
  let color;
  let preco;

  switch (platformId) {
    case 0:
      platform = netflix;
      color = '#F62717';//'#f4f7f3'
      preco = '29,99';
      break;
    case 1:
      platform = primeVideo;
      label = 'Prime Video';
      color = "#439CD6";
      preco = '15,99';
      break;
    case 2:
      platform = globoplay;
      color = '#fc4626';
      preco = '9,99';
      break;
    case 3:
      platform = premiere;
      color = '#338C2E';
      preco = '29,99';
      break;
    case 4:
      platform = conmebol;
      color = '#05589C';
      preco = '49,99';
      break;
  }

  return (
    <Dialog
      open={isOpenModal}
      onClose={handleModalClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{
        '.MuiDialog-paper': {
          backgroundImage: `url(${shadow})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundColor: color,
          backgroundPositionY: '100%',
        }
      }}
    >
      <DialogContent>
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: '100%',
                  marginTop: '60px',
                }}
              >
                <img src={platform} width="250px" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography
                marginTop="50px"
                variant="h5"
                align="center"
                sx={{
                  color: 'white',
                }}
              >
                Aproveite para assinar o plano e ter acesso ao <b>{movieTitle}</b> e mais</Typography>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: '#00000081',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px',
                  marginTop: '30px'
                }}
              >
                <Typography variant="h2"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'flex-end',
                    color: 'white',
                    p: 3.5,
                  }}
                >
                  <b>R${preco}</b>
                  <Typography variant="h4">/mês</Typography>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1" mt="60px">Digite sua senha:</Typography>
              <Grid container spacing={2} mt="20px">
                {[...Array(4)].map(item => (
                  <Grid item xs={3}>
                    <Box
                      sx={{
                        height: '100px',
                        borderRadius: '10px',
                        backgroundColor: '#ffffffa0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff'
                      }}
                    >
                      <Typography variant="h4">
                        <b>😀</b>
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  background: color,
                  p: 1.5,
                  marginTop: '45px',
                  textTransform: 'capitalize',
                  '&:hover': {
                    background: color,
                    opacity: 0.6,
                  }
                }}
              >
                Assinar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{
                  width: '100%',
                  p: 1.5,
                  color: '#FFF',
                  textTransform: 'capitalize',
                  marginTop: '8px',
                  border: `1px solid transparent`,
                  '&:hover': {
                    opacity: 0.6,
                    background: 'transparent',
                    backgroundColor: 'black',
                    border: `1px solid ${color}`
                  }
                }}
                onClick={handleModalClose}
                variant="contained"
              >
                Cancelar
              </Button>
            </Grid>

          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default SignaturePlanModal;