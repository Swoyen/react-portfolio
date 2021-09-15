import React from "react";
import Section from "../../controls/Section";
import Subtitle from "../../controls/Subtitle";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Section heading="Contact">
      <Subtitle>
        Please contact me if you have any opportunities or suggestions for the
        site. <br />I will reply as soon as possible
      </Subtitle>
      <ContactForm />
    </Section>
  );
};

export default Contact;
