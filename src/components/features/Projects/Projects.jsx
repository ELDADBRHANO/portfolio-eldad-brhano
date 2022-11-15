import "./Projects.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Projects() {
  const project = [
    {
      Title:"NBA Project",
      Description:"Project about NBA Players, stats, and news with daily update.",
      img:"/images/project.png",
      pagesUrl:"https://eldadbrhano.github.io/NBA-project/",
      githubUrl:"https://github.com/ELDADBRHANO/NBA-project"
    },
    {
      Title:"Phone Store",
      Description:"Made with js, Simple Phone store, get data about cell phones etc...",
      img:"https://www.mobileciti.com.au/media/catalog/category/Mobileciti-MobilePhones-Category.jpg",
      pagesUrl:"https://eldadbrhano.github.io/Phone-store-Project/",
      githubUrl:"https://github.com/ELDADBRHANO/Phone-store-Project"
    },
    {
      Title:"E-commerce",
      Description:"E-commerce site built with react JS, FireBase, you can search for products. to use the site you have to be register.",
      img:"https://cdn.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png",
      pagesUrl:"",
      githubUrl:"https://github.com/ELDADBRHANO/e-commerce"
    },
]
  return (
    <Swiper
    spaceBetween={35}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    
    {
      project.map((item)=>
      <SwiperSlide>
         <Card sx={{ maxWidth: 345 }}>
       <CardMedia
         component="img"
         alt="NBA"
         height="140"
         image={item.img}
         id="CardMedia"
       />
       <CardContent className="cardBody">
         <Typography id="item-title" gutterBottom variant="h6" component="container">
           {item.Title}
         </Typography>
         <Typography variant="body2" color="text.secondary">
          {item.Description}
         </Typography>
       </CardContent>
       <CardActions id="CardActions">
         <a target="_blank" rel="noreferrer" href="https://eldadbrhano.github.io/NBA-project/">
         <Button size="small">View</Button>
         </a>
         <a  target="_blank" rel="noreferrer" href="https://github.com/ELDADBRHANO/NBA-project">
         <Button size="small">Github</Button>
         </a>
       </CardActions>
     </Card>
      </SwiperSlide>
      )
    }
    ...
  </Swiper>
    
    // <Container className="container-projects">    
    // {
    //   project.map((item,i)=>
    //   <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     alt="NBA"
    //     height="140"
    //     image={item.img}
    //     id="CardMedia"
    //   />
    //   <CardContent className="cardBody">
    //     <Typography gutterBottom variant="h5" component="div">
    //       {item.Title}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //      {item.Description}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <a target="_blank" rel="noreferrer" href="https://eldadbrhano.github.io/NBA-project/">
    //     <Button size="small">View</Button>
    //     </a>
    //     <a  target="_blank" rel="noreferrer" href="https://github.com/ELDADBRHANO/NBA-project">
    //     <Button size="small">Github</Button>
    //     </a>
    //   </CardActions>
    // </Card>
    //   )
    // }
    
    // </Container>
  );
}
