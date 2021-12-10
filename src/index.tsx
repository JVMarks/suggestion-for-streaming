import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material'
import App from './App';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>,
  document.getElementById('root')
);