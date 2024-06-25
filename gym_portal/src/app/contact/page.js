// pages/contact.js
import Head from "next/head";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import gymImage from "../../../public/bg.png";

export default function Contact() {
  return (
    <div
      style={{
        backgroundImage: { gymImage },
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>Contact - FlexiGym</title>
      </Head>
      <Box
        className="bg-white py-10 px-4 mx-auto rounded-3xl"
        style={{
          maxWidth: "800px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            className="mb-8"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                className="mb-4"
                style={{ fontWeight: "bold" }}
              >
                Get in Touch
              </Typography>
              <form className="space-y-6">
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  className="bg-white rounded-lg shadow-md"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  className="bg-white rounded-lg shadow-md"
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  className="bg-white rounded-lg shadow-md"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="mt-4"
                >
                  Send Message
                </Button>
              </form>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" className="mb-4">
                Our members are important to us at FlexiGym, and we are
                committed to the satisfaction of fitness enthusiasts and gym
                owners. We value your feedback as it helps us improve and
                provide better services to meet your expectations.
              </Typography>
              <Typography
                variant="h5"
                className="mt-8 mb-4"
                style={{ fontWeight: "bold" }}
              >
                Contact Information
              </Typography>
              <Box className="flex items-center mb-4">
                <Phone className="mr-2 text-gray-600" />
                <Typography variant="body1">+1 234 567 890</Typography>
              </Box>
              <Box className="flex items-center mb-4">
                <Email className="mr-2 text-gray-600" />
                <Typography variant="body1">info@flexigym.com</Typography>
              </Box>
              <Box className="flex items-center mb-4">
                <LocationOn className="mr-2 text-gray-600" />
                <Typography variant="body1">
                  123 Gym Street, Fitness City, USA
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
