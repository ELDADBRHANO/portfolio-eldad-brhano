import './IronMan.css'
import eldad from '../../../images/ironman.png'
import { Box, Container } from "@mui/material";
function IronMan() {
  return (
    <Container >
        <Box className="ironManFlying"
            id="ironMan"
            component="img"
            alt="Eldad's protfolio."
            src={eldad}
            sx={{
              height: 500,
              width: 500,
              maxHeight: { xs: 500, md: 500 },
              maxWidth: { xs: 500, md: 500 },
            }}
          />
      </Container>
  );
};

export default IronMan;
