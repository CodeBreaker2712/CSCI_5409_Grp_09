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
    question: "What is FlexiGym?",
    answer:
      "FlexiGym is a platform that connects fitness enthusiasts with gyms and fitness trainers.",
  },
  {
    question: "How do I sign up?",
    answer:
      "You can sign up by clicking on the 'Sign Up' button on the top right corner and filling out the registration form.",
  },
  {
    question: "What are the benefits of using FlexiGym?",
    answer:
      "FlexiGym simplifies the process of finding the right gym by providing comprehensive information about gyms and their amenities. It enables users to compare choices, make sound decisions, and discover exclusive membership plans tailored to their needs.",
  },
  {
    question: "How does FlexiGym help fitness enthusiasts?",
    answer:
      "FlexiGym empowers fitness enthusiasts by offering a centralized platform to explore various gyms and fitness trainers. It allows users to discover new fitness opportunities, access exclusive deals, and connect with like-minded individuals to enhance their fitness journey.",
  },
  {
    question: "What are the key features of FlexiGym?",
    answer:
      "FlexiGym offers a gym search system based on location, services, amenities, and user reviews, enabling users to find the perfect gym effortlessly. It provides detailed gym profiles, alternative membership options, and flexible passes for users to choose from. Additionally, FlexiGym facilitates seamless interaction between consumers and gym owners, allowing direct communication for inquiries and memberships.",
  },
  {
    question: "How does Gym Portal benefit gym owners?",
    answer:
      "Gym Portal serves as a powerful marketing tool for gym owners, allowing them to showcase their facilities, services, and unique offerings to a targeted audience of fitness enthusiasts. By joining Gym Portal, gym owners can attract new members, increase visibility, and effectively manage their business interests.",
  },
  {
    question: "What sets Gym Portal apart from other fitness platforms?",
    answer:
      "Gym Portal stands out for its user-friendly interface, extensive database of gyms and fitness facilities, and comprehensive search features. Unlike other fitness platforms, Gym Portal offers flexible membership options, detailed gym profiles, and direct communication channels between users and gym owners, providing a seamless and personalized fitness experience.",
  },
  {
    question:
      "Can I use Gym Portal to book fitness classes or personal training sessions?",
    answer:
      "Yes, FlexiGym allows users to book fitness classes, personal training sessions, and other services offered by participating gyms and fitness trainers. Simply browse through the available options, select your preferred class or session, and book it directly through the platform.",
  },
  {
    question: "Is FlexiGym available on mobile devices?",
    answer:
      "Yes, FlexiGym is fully optimized for mobile devices, allowing users to access the platform anytime, anywhere. Whether you're using a smartphone or tablet, you can easily search for gyms, book classes, and stay updated on the latest fitness trends on the go.",
  },
];

export default function Faq() {
  return (
    <div>
      <Head>
        <title>FAQ - FlexiGym</title>
      </Head>
      <Box
        className="bg-white py-10 px-4 mx-auto shadow-lg rounded-lg"
        style={{ maxWidth: "800px" }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            className="mb-8 text-center"
            style={{ fontWeight: "bold" }}
          >
            Frequently Asked Questions
          </Typography>
          {faq_content.map((item, index) => (
            <Accordion key={index} className="mb-4">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
                className="bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                <Typography variant="h6" className="font-medium">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </div>
  );
}
