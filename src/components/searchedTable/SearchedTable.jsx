import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    {number: '1', fname: 'Темирлан', lname: 'Есенулы', fathName: '', IIN: '040205551504'},
    {number: '2', fname: 'Мадияр', lname: 'Куанышбеков', fathName: 'Еркебуланулы', IIN: '040205551504'},
    {number: '3', fname: 'Темирлан', lname: 'Есенулы', fathName: '', IIN: '040205551504'}
]

const tdStyle = {
    color: "#fff",
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '18px'
}

const thStyle = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "18px",

    color: "#6D6D6D",

    border: 0,
}

function SearchedTable(props) {
    const getPerson = (iin) => {

    }
  const resultDisplay = () => {
    if (props.result == null) {
        return null
    } else {
      return props.result.map((row, index) => (
        <TableRow
          key={index}
          sx={{ 'td, th': { border: 0 } }}
        >
          <TableCell sx={tdStyle} component="td" scope="row">
            {index+1}
          </TableCell>
          <TableCell sx={tdStyle} align="left">{row.first_name}</TableCell>
          <TableCell sx={tdStyle} align="left">{row.last_name}</TableCell>
          <TableCell sx={tdStyle} align="left">{row.patronymic}</TableCell>
          <TableCell sx={tdStyle} align="left">{row.iin}</TableCell>
          <TableCell sx={tdStyle} align="left"><Link to={'/profiler/person/'+ row.iin}>Перейти..</Link></TableCell>
        </TableRow>
      ))
    }
  }
    return (
        <TableContainer component={Paper} sx={{border: 0, boxShadow: 'none', borderRadius: 0, backgroundColor: "#6D6D6D"}}>
          <Table sx={{ minWidth: 650, background: "#0D0F11"}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={thStyle}>№</TableCell>
                <TableCell sx={thStyle} align="left"><span style={{}}>Имя</span></TableCell>
                <TableCell sx={thStyle} align="left"><span>Фамилия</span></TableCell>
                <TableCell sx={thStyle} align="left"><span>Отчество</span></TableCell>
                <TableCell sx={thStyle} align="left"><span>ИИН</span></TableCell>
                <TableCell sx={thStyle} align="left"><span>Действие</span></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultDisplay()}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

export default SearchedTable;