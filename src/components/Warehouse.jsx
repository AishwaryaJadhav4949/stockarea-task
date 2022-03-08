import React from 'react'
import {Link} from 'react-router-dom'


import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

const Warehouse = ({ name, code, id, city, space_available, cluster, img, is_registered,
    is_live }) => {
        let dispach = useDispatch();
        let history = useHistory();
  
       
    return (
        <article className="grid_item">

            <div >
                <div >
                    <img src={img} alt={cluster} className='photo' />
                </div>
                <header style={{display: "flex", alignItems: 'center',
                 padding:" 0.20rem 0.50rem", justifyContent:'space-between'}}>
                    <h4>{city}</h4>
                    <h4>{space_available}</h4>
                </header>
                <footer style={{display: "flex", alignItems: 'center',
                 padding:" 0.20rem 0.50rem", justifyContent:'space-between'}}>
                    <p>{cluster}</p>
                    
           
                <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Link to={`/detailpage/${id}`}> <Button >Edit</Button>  </Link>
            {/* <Button onClick={() => history.push(`/detailpage/${id}`)}>Details</Button> */}
          </ButtonGroup>
                </footer>
            
            </div>


        </article>
    )
}

export default Warehouse