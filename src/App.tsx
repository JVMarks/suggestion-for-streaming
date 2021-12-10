import { CssBaseline, ThemeProvider } from "@mui/material";
import Routes from "./routes";

import { Theme as theme } from "./assets/styles/Theme";
import LayoutContainer from "./components/layout/Container";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <CssBaseline />
        <Routes />
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
