import { Container, ThemeProvider } from "@material-ui/core";
import Brand from "./components/Brand/Brand";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Project/Project";

const App = () => {
  return (
    <div>
      <ThemeProvider>
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
