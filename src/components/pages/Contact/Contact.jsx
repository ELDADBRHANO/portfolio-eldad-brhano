import "./Contact.css";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from "formik";
const theme = createTheme();
const initialValues = {
  name:'Please enter your full name.',
  email:'Please enter a valid Email.',
  text:'Now you can send me your message!'
}
const onSubmit = values=>{
  console.log('Form data', values);
}
const validate = values=>{
  let errors = {};
  if(!values.name){
    errors.name = 'required';
  }
  if(!values.lastName){
    errors.lastName = 'required';
  }
  if(!values.email){
    errors.email = 'required';
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = 'Invalid email format.'
  }

  if(!values.text){
    errors.text = 'required';
  }
  return errors;
}


export default function Contact() {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });
  
console.log('Form errors', formik.errors)
  return (
    <ThemeProvider theme={theme}>
      <Container className="form_fontainer">

      <form id="formm" onSubmit={formik.handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Full Name</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className='error'>{formik.errors.name}</div>
        ) : null}
      </div>

      <div className='form-control'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='error'>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className='form-control'>
        <label htmlFor='channel'>Message</label>
        <textarea 
          type='text'
          id='text'
          name='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.text}
        />
        {formik.touched.channel && formik.errors.channel ? (
          <div className='error'>{formik.errors.channel}</div>
        ) : null}
      </div>

      <Button style={{color:'yellow'}} type='submit'>Submit</Button>
    </form>
      </Container>
    </ThemeProvider>
  );
}