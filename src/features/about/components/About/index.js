import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";

function About() {
  return (
    <section id="about" className="w-4/5 h-screen mx-auto pt-20">
      <div className="w-[32rem] md:w-[38rem] lg:w-[50rem] mx-auto">
        <Typography variant="h1" color="blue-gray" className="mb-3">
          About me
        </Typography>
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <Typography variant="h5" color="blue-gray">
                10/2023 - Now at Corus Consulting
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="paragraph" color="blue-gray">
                Full Stack Developer working on new feature development and
                process optimization to enhance user experience in a
                microservices-based application integrated with CRM and SAP,
                built with React, Flask, and FastAPI.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <Typography variant="h5" color="blue-gray">
                08/2023 at freeCodeCamp
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="paragraph" color="blue-gray">
                Front End Development Libraries certification. Built projects in
                HTML5, CSS, jQuery, React.js and React&Redux
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <Typography variant="h5" color="blue-gray">
                07/2022 at Cambridge English
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="paragraph" color="blue-gray">
                Certificate in Advanced English I was awarded grade A, which is
                equivalent to C2 Council of Europe Level.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <Typography variant="h5" color="blue-gray">
                04/2021 - 09/2023 at Lleida.net
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="paragraph" color="blue-gray">
                Junior Full Stack Developer working on new features, bugfixes
                and other helpdesk tasks, leveraging JQuery, React, FastAPI and
                Java.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <Typography variant="h5" color="blue-gray">
                04/2021 at UPC(FIB)
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="paragraph" color="blue-gray">
                Graduated in Computer Engineering (Mention in Software Engineering) at Universitat Politécnica de Catalunya (UPC).
                Databases, Database design , Programming, Data structures and algorithms,Software Architecture, Services, Operative Systems, Networks, Introduction to cyber security.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <Typography variant="h5" color="blue-gray">
                06/2019 - 04/2021 at EXA-PTG
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="paragraph" color="blue-gray">
                IT Technician at EXA-PTG. Worked in the maintenance of Linux-based computers, networks and servers.
                Developed a web application for the company's website in PHP and JQuery. Mantained software in Python.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
}

export default About;
