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

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - Gym Portal</title>
      </Head>
      <Box className="bg-gray-100 py-10 px-4 border-2 border-black rounded-2xl mx-40">
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" className="mb-8">
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" className="mb-4">
                Get in Touch
              </Typography>
              <form className="space-y-6">
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  className="bg-white rounded-lg"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  className="bg-white rounded-lg"
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  className="bg-white rounded-lg"
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
              <Typography variant="p" className="mb-4">
                Our members are important to us at FlexiGym, and we are
                committed to satisfaction of gym enthusiasts and gym owners. We
                work hard on our communication with you, incredibly well giving
                even more value for our service. Thus your opinions enable us
                improve on an ongoing basis until we finally surpass all
                expectations.
              </Typography>
              <Typography variant="h5" className="mt-8 mb-4">
                Contact Information
              </Typography>
              <Box className="flex items-center mb-4">
                <Phone className="mr-2 text-gray-600" />
                <Typography variant="body1">+1 234 567 890</Typography>
              </Box>
              <Box className="flex items-center mb-4">
                <Email className="mr-2 text-gray-600" />
                <Typography variant="body1">info@gymportal.com</Typography>
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
