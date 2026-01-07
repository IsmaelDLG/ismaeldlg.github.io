import { Typography } from "@material-tailwind/react";

import Timeline from "../Timeline";
import Section from "../../../../components/Section";

function About() {
  return (
    <Section id="about">
      <div className="flex flex-col">
      <Typography variant="h1" color="blue-gray" className="mb-3 text-center">
        About Me
      </Typography>
      <Timeline />
      </div>
    </Section>
  );
}

export default About;
