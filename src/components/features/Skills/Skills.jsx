import './Skills.css'
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Skills() {

  return (
    <Container>
      <Grid container spacing={2}>
        
      <Typography variant="h3">
        <blockquote id='title-skills' className='title'>
          My Skills
        </blockquote>
      </Typography>
        <Grid className='grid-skills' lg={10} xs={12}>
          <Typography variant="subtitle2">
            React JS
          <Box className="react-skill"/>
          </Typography>
          <Typography variant="subtitle2">
            JavaScript
          <Box className="js-skill"/>
          </Typography>
          <Typography variant="subtitle2">
            NodeJS
          <Box className="node-skill"/>
          </Typography>
          <Typography variant="subtitle2">
            HTML
          <Box className="html-skill"/>
          </Typography>
          <Typography variant="subtitle2">
            CSS
          <Box className="css-skill"/>
          </Typography>
          <Typography variant="subtitle2">
            MongoDB
          <Box className="db-skill"/>
          </Typography>
          </Grid>
      </Grid>
    </Container>
  );
}

export default Skills;
