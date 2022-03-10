import React, { useState, useEffect } from 'react';
import Warehouse from './Warehouse';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { CircularProgress} 
from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from 'react-router-dom'


const WarehouseList = ({sortedWarehouses, loading}) => {
    // const { users, sortedWarehouses } = useSelector(state => state.users)
    if(loading){
        return(
            <div style={{display: "flex",paddingTop:'3rem', alignItems:'center', justifyContent:'center'}}>
            <CircularProgress size="5rem" />
          </div>     
        )
       
    }
    if(sortedWarehouses.length < 1){
        return (
            <h2 className='section-title' 
             style={{display: "flex",paddingTop:'3rem', alignItems:'center', justifyContent:'center'}}
            >
              no warehouses matched your search criteria
            </h2>
          )
    }
    
    return (
      
        <div className='main_grid'>
           {
                sortedWarehouses.map(item => {
                    return <Warehouse key={item.id} {...item} />
                })
            }
        
        </div>
      
    )
}

export default WarehouseList
