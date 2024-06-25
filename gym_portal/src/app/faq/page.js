// pages/faq.js

import Head from "next/head";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faq_content = [
  {
    question: "What is Gym Portal?",
    answer:
      "Gym Portal is a platform that connects fitness enthusiasts with gyms and fitness trainers.",
  },
  {
    question: "How do I sign up?",
    answer:
      "You can sign up by clicking on the 'Sign Up' button on the top right corner and filling out the registration form.",
  },
];

export default function Faq() {
  return (
    <div>
      <Head>
        <title>FAQ - Gym Portal</title>
      </Head>
      <Box className="bg-gray-100 py-10 px-4 border-2 border-black rounded-2xl mx-56">
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" className="mb-8">
            Frequently Asked Questions
          </Typography>
          {faq_content.map((item, index) => (
            <Accordion key={index} className="mb-4 shadow-lg rounded-lg">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
                className="bg-gray-200 hover:bg-gray-300 rounded-t-lg"
              >
                <Typography variant="h6" className="font-medium">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-white rounded-b-lg">
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </div>
  );
}
