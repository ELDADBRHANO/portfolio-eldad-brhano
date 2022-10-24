import "./About.css";
import React from "react";
import Myself from "../../features/Myself/Myself";
import { Container } from "@mui/system";
import Skills from "../../features/Skills/Skills";
import { Grid } from "@mui/material";
function About() {
  return (
    <Container className="container-about">
      <Grid container spacing={2}>
      <Grid lg={12} xs={12}>
        <Myself/>
      </Grid>
      <Grid lg={12} xs={12}>
      <Skills/>
      </Grid>
      </Grid>
    </Container>
  );
};

export default About;
