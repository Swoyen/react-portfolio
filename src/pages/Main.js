import React from "react";
import Brand from "../components/Brand/Brand";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Project/Project";
import Resume from "../components/Resume/Resume";

const Main = () => {
  return (
    <div>
      <Brand />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default Main;
