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
import { orange } from "@material-ui/core/colors";

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

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <main>
          <Container maxWidth="md" style={{ textAlign: "center" }}>
            <Brand />
            <Projects />
            <Resume />
            <Contact />
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
};

export default App;
