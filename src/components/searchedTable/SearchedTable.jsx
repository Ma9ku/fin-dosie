import React, { useState, useEffect } from 'react';

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
              {rows.map((row) => (
                <TableRow
                  key={row.number}
                  sx={{ 'td, th': { border: 0 } }}
                >
                  <TableCell sx={tdStyle} component="td" scope="row">
                    {row.number}
                  </TableCell>
                  <TableCell sx={tdStyle} align="left">{row.fname}</TableCell>
                  <TableCell sx={tdStyle} align="left">{row.lname}</TableCell>
                  <TableCell sx={tdStyle} align="left">{row.fathName}</TableCell>
                  <TableCell sx={tdStyle} align="left">{row.IIN}</TableCell>
                  <TableCell sx={tdStyle} align="left">Перейти</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

export default SearchedTable;