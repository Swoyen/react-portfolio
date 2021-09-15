import React from "react";
import Section from "../../controls/Section";
import ResumeEducation from "./ResumeEducation";
import ResumeSubtitle from "./ResumeSubtitle";
import ResumeWorkExperience from "./ResumeWorkExperience";
import ResumeSkillAndTools from "./ResumeSkillAndTools";
import ResumeDownload from "./ResumeDownload";

const Resume = () => {
  return (
    <Section heading="Resume">
      <ResumeSubtitle />
      <ResumeEducation />
      <ResumeWorkExperience />
      <ResumeSkillAndTools />
      <ResumeDownload />
    </Section>
  );
};

export default Resume;
