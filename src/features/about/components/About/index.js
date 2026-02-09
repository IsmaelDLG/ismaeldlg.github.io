import { Typography } from "@material-tailwind/react";

import Timeline from "../Timeline";
import Section from "../../../../components/Section";

function About() {
  return (
    <div id="about" className="w-full bg-discord-100 py-20">
      <Section className="bg-transparent shadow-none">
        <div className="flex flex-col p-6 md:p-12">
          <Typography variant="h1" className="mb-3 text-center text-discord-900">
            About Me
          </Typography>
          <Timeline />
        </div>
      </Section>
    </div>
  );
}

export default About;
