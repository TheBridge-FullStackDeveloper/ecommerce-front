import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../components/productCard/ProductCard'
import products from '../product-data'
import ImgMediaCard from "../components/productCard/ProductCard"

/*function mostPopular(rating) {
  if (rating > 4 ) {
    return ()
  } else {
    return 
  }
}*/
/* font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
/* identical to box height 
*/

export default function HomePage() {
  return (
    <Box>
      {/* Titular */}
      <Typography variant='h2' sx={{
        cursor: 'pointer', textAlign: 'center', border: '2px solid #EBE5FC',
        backgroundColor: '#EBE5FC', height: 237, display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}>
        Welcome in e-commerce
      </Typography>
      {/* Most Popular */}
      <Box sx={{display:'grid', justifyContent:'space-around'}}>
        <Box sx={{ flexGrow: 1, marginTop: 5 }} >
          <Typography variant='h4' sx={{ cursor: 'pointer', marginLeft: 5 }}>
            Most Popular
          </Typography>
          <Grid container spacing={2} padding={3}>
            {
              products.map(products => products.rating > 4 ? (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <ImgMediaCard key={products.id} product={products} />
                </Grid>
              ) : null)
            }

          </Grid>
        </Box>
        {/* Discount */}
        <Box sx={{ flexGrow: 1, marginTop: 5 }} >
          <Typography variant='h4' sx={{ cursor: 'pointer', marginLeft: 5 }}>
            Discount
          </Typography>
          <Grid container spacing={2} padding={3}>
            {
              products.map(products => products.price < 500 ? (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <ImgMediaCard key={products.id} product={products} />
                </Grid>
              ) : null)
            }

          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
