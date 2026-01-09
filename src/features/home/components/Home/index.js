import { Typography, Button } from "@material-tailwind/react";

import IconLink from "../../../../components/IconLink";
import Section from "../../../../components/Section";

function Home() {
  return (
    <Section id="home" className={""}>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <Typography variant="h1" color="blue-gray" className="mb-3">
            Hi, I'm Ismael
          </Typography>
          <Typography variant="lead" color="blue-gray">
            I'm a Full Stack Developer with experience in building web
            applications using React, Flask and FastAPI.
          </Typography>
          <Typography variant="lead" color="blue-gray" className="mt-4">
            While I love learning new technologies, I believe that mastering the
            fundamentals is key to becoming a great developer. Thus, I focus on
            building a strong foundation in computer science and software
            engineering principles. Being consistent and dedicated to my craft
            is what drives me to continuously improve my skills and deliver
            high-quality work.
          </Typography>
          <span className="block mt-10 flex gap-8 justify-center lg:justify-start">
            <IconLink icon={"email"} />
            <IconLink icon={"github"} />
            <IconLink icon={"linkedin"} />
          </span>
          <span className="block mt-6 flex justify-center lg:justify-start">
            <Button
              variant="text"
              size="md"
              className="rounded-md border border-blue-gray-900 bg-white text-center flex items-center gap-x-2 hover:bg-blue-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <Typography
                variant="h6"
              >
                Download CV
              </Typography>
            </Button>
          </span>
        </div>
        <span className="flex-1 p-6">
          <img alt="profile" src="/profile.png" className="w-1/2 mx-auto" />
        </span>
      </div>
    </Section>
  );
}

export default Home;
