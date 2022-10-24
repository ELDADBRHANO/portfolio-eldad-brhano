import "./Myself.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
export default function Myself() {
  return (
    <Box className="grid-about-me" sx={{ flexGrow: 1 }}>
      <Grid  container spacing={2}>
        <Grid lg={8} xs={12}>
        <Typography className="title" variant="h4">
            Little About Me 
          </Typography>
          <Typography className="aboutme" variant="h5">
          I'm a Web Developer, from israel. I have big passion for Creating things and Web.
          I'm 23 years old. My activities includes out side trvelling, play basketball, watching NBA (LAKERS💜💛), And of course watching netflix!
          </Typography>
        </Grid>
        <Grid lg={4} xs={12}>
          <Box>
            <img className="Eldad-img" src="/images/mewhite.png.jpg" alt="" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
