import "./Myself.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ButtonFeatures from "../btn/Btn";
export default function Myself() {
  return (
    <Box className="grid-about-me" sx={{ flexGrow: 1 }}>
      <Grid  container spacing={2}>
        <Grid lg={6} xs={12}>
          <Box className="box-img">
            <img className="Eldad-img" src="/images/day.png" alt="" />
          </Box>
        </Grid>
        <Grid className="texts" lg={6} xs={12}>
        <Typography id="title-about-me" className="title" variant="h4">
            Little About Me 
          </Typography>
        <Typography className="aboutme" variant="h5">
          I'm a Web Developer, from israel. I have big passion for Creating things on Web.
          I'm 23 years old. My activities includes out side travelling, play basketball, watching NBA (LAKERS💜💛), And of course watching netflix!
          </Typography>
        <ButtonFeatures btnTxt="Resume"/>
        </Grid>
      </Grid>
    </Box>
  );
}
