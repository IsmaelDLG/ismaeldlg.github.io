import { Button, Typography, Card } from "@material-tailwind/react";
import { Section } from "../../../../components";

export default function Contact() {
  return (
    <Section id="contact">
      {/*
      <Typography variant="lead" color="black" className="mb-6 text-center">
        {process.env.REACT_APP_TELEGRAM_CHANNEL_ID}
      </Typography>
      <Button variant="text" color="blue" size="lg" className="mx-auto mt-6 block" onClick={() => {
        fetch(`https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_API_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify({
            chat_id: process.env.REACT_APP_TELEGRAM_CHANNEL_ID,
            text: 'Hello from my website!'
          })
        })
      }}>
        Send Message
      </Button>
      */}
      <Card color="transparent" shadow={false} className="">
        <Typography variant="h3" color="blue-gray" className="mb-4 text-center">
          Contact Me
        </Typography>
        <Typography variant="lead" color="black" className="mb-6 text-center">
          Feel free to reach out for collaborations or just a friendly hello!
        </Typography>
        <div className="flex justify-center space-x-4">
          <Button
            variant="outlined"
            color="blue"
            size="lg"
            onClick={() => window.location.href = "mailto:ismadlg.works@gmail.com"}
          >
            <div className="flex flex-row items-center">
              <span className="block fa-solid fa-envelope text-xl pr-2"></span>
              <Typography size="md">Email Me</Typography>
            </div>
          </Button>
          <Button
            className=""
            variant="outlined"
            color="blue"
            size="lg"
            onClick={() => window.open("https://www.linkedin.com/in/ismaeldlg/", "_blank")}
          >
            <div className="flex flex-row items-center">

              <span className="fa-brands fa-linkedin text-xl pr-2"></span>
              <Typography size="md">Linked In</Typography>
            </div>
          </Button>
        </div>
      </Card>
    </Section>
  );
}