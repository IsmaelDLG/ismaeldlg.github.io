import { Button, Typography } from "@material-tailwind/react";
import { Section } from "../../../../components";

export default function Contact() {
  return (
    <Section id="contact">
      <div>
      <Typography variant="h1" color="black" className="mb-3 text-center">
        Contact Me
      </Typography>
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
      </div>
    </Section>
  );
}