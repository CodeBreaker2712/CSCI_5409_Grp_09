"use client";
import Head from "next/head";
import Link from "next/link";
import { Container, Typography, Button, Grid } from "@mui/material";
import AboutComponent from "../components/aboutComponent";
import AmenitiesComponent from "../components/amenitiesComponent";
import MembershipComponent from "../components/membershipComponenet";
import NavigationPanel from "../components/navigationPanel";
import Image from "next/image";
import gymImage from "../../public/gym_home.png";
// import { Search } from '@mui/icons-material';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>FlexiGym</title>
      </Head>

      <Container maxWidth="lg" className=" text-center">
        <div className="min-h-screen flex justify-center items-center relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url(${gymImage.src})` }}
          ></div>
          <div className="relative z-10 text-black">
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to FlexiGym
            </Typography>
            <Typography variant="subtitle1" component="p" gutterBottom>
              Find the perfect gym for your fitness journey!
            </Typography>
            <Grid container justifyContent="center" className="mt-8">
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Link href="/faq" passHref>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                  >
                    Learn More
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
        <AboutComponent />
        <MembershipComponent />
        <AmenitiesComponent />
      </Container>
    </div>
  );
}
