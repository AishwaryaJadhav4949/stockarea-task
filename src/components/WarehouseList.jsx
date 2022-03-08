import React, { useState, useEffect } from 'react';
import Warehouse from './Warehouse';
// import Loader from './Loader'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from 'react-router-dom'


const WarehouseList = ({sortedWarehouses}) => {
    // const { users, sortedWarehouses } = useSelector(state => state.users)
    return (
  
        <div className='main_grid'>
          

            {sortedWarehouses.map(item => {
                return <Warehouse key={item.id} {...item} />
            })}
        </div>
      
    )
}

export default WarehouseList
