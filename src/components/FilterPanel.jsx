import React, { useState, useEffect } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select }
  from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';




const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}


const FilterPanel = ({ users, sortedWarehouses, city, handleChange, setSearchTerm, 
  searchTerm, cluster, space_available, minSize, maxSize }) => {
  


  let cities = getUnique(users, "city");
  cities = ['all', ...cities]
  cities = cities.map((item, index) => {
    return <MenuItem value={item} key={index}>{item}</MenuItem>
  })

  let clusters = getUnique(users, "cluster");
  clusters = ['all', ...clusters]
  clusters = clusters.map((item, index) => {
    return <MenuItem value={item} key={index}>{item}</MenuItem>
  })

  


  return (
    <>

      <div className='searchBar-wrap'>
      
        <input
          type='text'
          placeholder='search warehouses'
          onChange={setSearchTerm}
          value={searchTerm} />
      </div>

      <div className="container" style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
        <div className="row inputs"  style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
          <FormControl className=' input-group' style={{flexDirection:'column', justifyContent:"center"}}>
            <div id="city" style={{paddingBottom: '20px',fontSize:'1.40rem'}} >city</div>
            <Select id="city" className='select' name='city' value={city} onChange={handleChange}>
              {cities}
            </Select>
          </FormControl>

          <FormControl className='input-group' >
            <div id="cluster" style={{paddingBottom: '20px',fontSize:'1.40rem'}}>cluster</div>
            <Select id="cluster" name='cluster' className='select' value={cluster} onChange={handleChange}>
              {clusters}
            </Select>
          </FormControl>

   
      
          <div className="input-group"  style={{flexDirection:'column', alignItems:'center', marginLeft:"2rem"}}>
            <div htmlFor="space_available" style={{paddingBottom: '25px',fontSize:'1.40rem'}}>
              room price <span style={{fontSize:'2rem', paddingLeft:"1rem" }}>{space_available}</span>
            </div>
            <input type="range" name='space_available' min={minSize} max={maxSize} id={space_available} value={space_available}
              onChange={handleChange} className='form-control input-group' />
          </div>
        </div>
      </div>


    </>
  )
}


export default FilterPanel