import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Building up a positive heritage in our very own lawn

We’re glad for our Georgia legacy, and all the more explicitly that we consider Atlanta the place where we grew up. Our central command, referred to inside the organization as the Support Center for eatery Operators, is found only outside of downtown.

        </p>
        <br />
        <p>
        We are accomplices with the more prominent Atlanta business network in generous undertakings, attempting to animate the neighborhood economy through employment creation, just as driving stewardship activities planned to leave Georgia superior to anything we discovered it.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
