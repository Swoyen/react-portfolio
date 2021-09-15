import { Typography } from "@material-ui/core";
import React from "react";
import Subheading from "../../controls/Subheading";
import { education } from "../../data/resume";
import ResumeItem from "./ResumeItem";

const educations = education;
const ResumeEducation = () => {
  return (
    <div>
      <Subheading>Education</Subheading>
      {educations.map((education) => (
        <ResumeItem
          key={education.id}
          heading={education.title}
          subheading={education.subtitle}
          date={education.date}
        />
      ))}
    </div>
  );
};

export default ResumeEducation;
