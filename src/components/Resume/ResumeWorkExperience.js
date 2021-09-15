import React from "react";
import Subheading from "../../controls/Subheading";
import { work } from "../../data/resume";
import ResumeItem from "./ResumeItem";

const workHistory = work;
const ResumeWorkExperience = () => {
  return (
    <div>
      <Subheading>Work Experience</Subheading>
      {workHistory.map((work) => (
        <ResumeItem
          key={work.id}
          heading={work.title}
          subheading={work.subtitle}
          date={work.date}
        />
      ))}
    </div>
  );
};

export default ResumeWorkExperience;
