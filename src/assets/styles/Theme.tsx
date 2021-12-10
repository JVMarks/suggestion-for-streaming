import { createTheme } from '@mui/material';

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#F62717',
    },
    secondary: {
      main: '#929292',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#929292',
    },
    background: {
      default: '#080a07',
      paper: '#171923'
    }
  },
  shape: {
    borderRadius: 5,
  },
  typography: {
    fontFamily: 'Poppins',
  },
  components: {
    MuiPaper: {
      variants: [
        {
          props: { className: 'background' },
          style: {
            position: 'fixed',
            height: '100vh',
            width: '100vw',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'luminosity',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#07080A',
          }
        }
      ]
    }
  }
});
