import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import {upadateUser , getSingleUser} from '../redux/actions'
import { Link, useParams , useHistory} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },

}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const SingleDetailpage = () => {
    let dispach = useDispatch();
    let { id } = useParams();
    let history = useHistory();
    const [inputs, setInputs] = useState({
        cluster: "",
        name: "",
        city: "",
        space_available: "",
        is_live: "",
    })
    const { user } = useSelector(state => state.users);
    useEffect(() => {
        dispach(getSingleUser(id));
    }, [inputs])
    
    
    const { id: ids, name: warehouseName,
        cluster: warehouseCluster,
        space_available: warehouseSpace,
        city: warehouseCity , is_live: is_warehouse_live} = user;

   
    
   
    const [error ,setError] = useState('');
    const { cluster, name, city, space_available, is_live } = inputs;
    
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setInputs({
             
             ...inputs, [name]: value
             })
    }
    const editItem = ()=>{
        if(user){
            setInputs({ ...user})
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !cluster || !city || !space_available || !is_live){
            setError('Please click on edit item')
        }
        else{
            dispach(upadateUser(inputs, id))
            setTimeout(() => {
                history.push('/');     
            }, 500);
           
            setError("");
        }
    }
    return (
        <>
            <TableContainer component={Paper} style={{
                margin: "5rem auto",
                width: '90%',

            }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Cluster</StyledTableCell>
                            <StyledTableCell align="center">Warehouse Name</StyledTableCell>
                            <StyledTableCell align="center">City</StyledTableCell>
                            <StyledTableCell align="center">Space Available</StyledTableCell>
                            <StyledTableCell align="center">is_live</StyledTableCell>
                            <StyledTableCell align="center">Edit</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                       <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                {warehouseCluster}
                            </StyledTableCell>
                            <StyledTableCell align="center">{warehouseName}</StyledTableCell>
                            <StyledTableCell align="center">{warehouseCity}</StyledTableCell>
                            <StyledTableCell align="center">{warehouseSpace}</StyledTableCell>
                            <StyledTableCell align="center">{is_warehouse_live}</StyledTableCell>
                           <StyledTableCell align="center">
                                <ButtonGroup variant="outlined" aria-label="outlined button group">
                                     <Button onClick={editItem}>Edit</Button>

                                </ButtonGroup>

                            </StyledTableCell>
                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { width: '45ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                
                        <TextField id="standard-basic" label="Standard" variant="standard"
                            name='cluster' value={cluster || ""} type='text' onChange={handleInputChange} /><br />
                        <TextField id="standard-basic" label="Standard" variant="standard"
                            name='name' value={name || ""} type='text' onChange={handleInputChange} /> <br />
                        <TextField id="standard-basic" label="Standard" variant="standard"
                            name='city' value={city || ""} type='text' onChange={handleInputChange} /> <br />
                        <TextField id="standard-basic" label="Standard" variant="standard"
                            name='space_available' value={space_available || "" } type='number' 
                            onChange={handleInputChange} /> <br />
                            <TextField id="standard-basic" label="Standard" variant="standard"
                            name='is_live' value={is_live || ""} type='text' onChange={handleInputChange} /> <br />
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button type='submit' onClick={handleSubmit}>Submit</Button>

                        </ButtonGroup>
                    
                </Box>
            </div>


        </>
    )
}

export default SingleDetailpage