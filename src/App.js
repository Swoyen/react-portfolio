import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
import Brand from "./components/Brand/Brand";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Project/Project";
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext";
import { useContext } from "react";
import {
  blue,
  yellow,
  green,
  blueGrey,
  purple,
} from "@material-ui/core/colors";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import IssueTracker from "./pages/IssueTracker";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway",
    h1: {
      fontFamily: "Lusitana",
    },
    h2: {
      fontFamily: '"Lusitana"',
    },
    h3: {
      fontFamily: '"Lusitana"',
    },
    h4: {
      fontFamily: '"Lusitana"',
    },
    h5: {
      fontFamily: '"Lusitana"',
    },
    h6: {
      fontFamily: '"Lusitana"',
    },
    body2: {
      fontWeight: "400",
    },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: "Raleway",
    h1: {
      fontFamily: "Lusitana",
    },
    h2: {
      fontFamily: '"Lusitana"',
    },
    h3: {
      fontFamily: '"Lusitana"',
    },
    h4: {
      fontFamily: '"Lusitana"',
    },
    h5: {
      fontFamily: '"Lusitana"',
    },
    h6: {
      fontFamily: '"Lusitana"',
    },
    body2: {
      fontWeight: "400",
    },
  },
  palette: {
    primary: {
      light: purple[300],
      main: purple[400],
      dark: purple[600],
    },
    text: {
      primary: blueGrey[100],
      secondary: blueGrey[200],
    },
  },
});

const App = () => {
  const [darkMode] = useContext(DarkModeContext);
  //const darkMode = darkModeCxt.state.darkMode;
  return (
    <div style={{ background: darkMode ? "#0a0a0a" : "inherit" }}>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <main>
            <Container maxWidth="md" style={{ textAlign: "center" }}>
              <Switch>
                <Route path="/issuetracker" component={IssueTracker}></Route>
                <Route path="/" component={Main}></Route>
              </Switch>
            </Container>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
