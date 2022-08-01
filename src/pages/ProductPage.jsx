import { Box, Grid, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import products from '../product-data'
import ImgMediaCard from "../components/productCard/ProductCard"
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';


export default function ProductPage() {
  const [filterProduct, setFilterProduct] = useState('');

  const [category, setCategory] = useState('');

  const handleProductChange = (event) => {
    setFilterProduct(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };

  const categories = products.map(product => product.category)
  const filtered = [... new Set(categories)];


  return (
    <Box>
      <Box sx={{ display: 'flex', mt: 8, justifyContent: 'center', alignItems: 'center' }}>
        <TextField
          autoComplete="off" id="outlined-basic" label="Search Product" variant="outlined" sx={{ width: '400px', maxHeight: '50px' }}
          onChange={handleProductChange}
        />
        <TextField sx={{ width: '150px', maxHeight: '50px', ml: 8 }}
          labelId="filter"
          id="filter"
          label="Filter"
          select
          onChange={handleCategoryChange}
        >
          {filtered
            .map((element, index) => (
              <MenuItem key={index} product={index} value={element}>
                {element}
              </MenuItem>
            ))}
        </TextField>

      </Box>
      <Box >
        <Box sx={{ flexGrow: 1, marginTop: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <Grid container spacing={2} padding={3} >
            {
              products
                .filter((product) => product.name.toLowerCase().includes(filterProduct.toLowerCase()) )
                .filter((product) => product.category.includes(category))
                .map(products => (
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ImgMediaCard key={products.id} product={products} />
                  </Grid>
                ))
            }
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}