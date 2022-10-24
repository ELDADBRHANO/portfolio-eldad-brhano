import Button from "@mui/material/Button";
import "./btn.css"
function ButtonFeatures(props) {
  return (
    <Button id="btn"
      style={{
        borderRadius: 35,
        color:'white'
      }}
    >
      {props.btnTxt}
    </Button>
  );
}

export default ButtonFeatures;







