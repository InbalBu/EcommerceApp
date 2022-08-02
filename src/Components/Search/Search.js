import Product from '../Product/Product';
import { Grid } from '@mui/material';
import styles from './index.module.css'
import { StoreContext } from '../../App';
import React, { useContext, useState } from 'react'

const Search = () => {
  const {showSearchPage,setShowSearchPage}=useContext(StoreContext);
    const [search, setSearch] = useState();
    const searchItem = JSON.parse(localStorage.getItem("storeProducts"));

    function handleSearch(event)
    {
        setSearch(event.target.value);
    }

  return (
    <div className={styles.container} style={{ visibility: showSearchPage ? "visible" : "hidden" }}>
    <label className={styles.label}>ShoeStore</label>
    <input className={styles.input} onChange={handleSearch} type="text" placeholder='Search...' />
    <Grid
    alignItems="center"
    justify="center" 
    textAlign="center"
    style={{ minHeight: "100vh" }}
    container
    >
    {searchItem&&Array.from(searchItem).filter(item=>String(item.name).includes(search)).map((item, index) =>
        
        <Grid  key={index}
          align="center" 
          className={styles.grid}
           item xs={12}  md={6} lg={3}>
         <Product Img={item.image.asset.url}
         title={item.name}
         price={item.price}>
         </Product>
         </Grid>)}
    </Grid>
    </div>
  )
}

export default Search