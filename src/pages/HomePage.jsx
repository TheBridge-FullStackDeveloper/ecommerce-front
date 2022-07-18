import { Box, Grid } from '@mui/material'
import React from 'react'
import ProductCard from '../components/productCard/ProductCard'
import products from '../product-data'
import ImgMediaCard from "../components/productCard/ProductCard"

export default function HomePage() {
    return (
      <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={2} padding={3}>
          {
            products.map(products =>(
              <Grid item xs={12} sm={6} md={4} lg={4}>
            <ImgMediaCard key={products.id} product={products}/>
          </Grid>
            ))
          }
        </Grid>
      </Box>
    );
  }
