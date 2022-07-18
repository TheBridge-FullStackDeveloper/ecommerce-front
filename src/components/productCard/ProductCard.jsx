import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import { Box } from '@mui/material';


export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="192"
        image="https://cdn.ipadizate.com/2021/11/nuevo-MacBook-pro.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Mackbook
        </Typography>
        <Typography className="price" gutterBottom variant="h5" component="div" >
          {accounting.formatMoney(1300,{symbol:'€'})}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        El MacBook Pro de 13 pulgadas incluye el nuevo chip M2, que lo convierte en un titán. Ofrece hasta 20 horas de autonomía1 y un sistema de refrigeración activa para mantener un ritmazo incluso en tareas muy complejas. Y qué decir de la cámara FaceTime HD, la pantalla Retina y los micros con calidad de estudio. Además, su diseño compacto es ideal para trabajar donde sea. Tira millas.
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"space-between", mr:2}}>
        <Button size="large" variant="contained" color="secondary" sx={{fontWeight:"bold", backgroundColor:"#7749F8",mb:0, '&:hover':{backgroundColor:"#FFFFFF", color:"#7749F8", fontWeight:'bold'} }}>Add to Cart</Button>
        <Box sx={{display:"flex"}}>
            {Array(5)
              .fill()
              .map((_, i)=>(
              <p>&#11088;</p>
              ))}
        </Box>
        </CardActions>
    </Card>
  );
}