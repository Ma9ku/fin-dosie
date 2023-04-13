import React, { useState, useEffect } from 'react';
import './rightTopFrame.scss'

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function RightTopFrame() {

    const displayData = () => {
        return (
            <div >
                <span>Нет данных</span>
            </div>
        )
    }
    return ( 
        
        <div className="right-top-section">
            <div className="other-line">
                <div>
                    <label htmlFor="born-city">Родственники</label>
                    <TableContainer>
                        <Table aria-label="collapsible table" className="uitable">
                            <TableHead>
                            <TableRow className="uitableHead">
                                <TableCell sx={{padding: 1}}style={{ width: '5%',}} align="left"><a>№</a></TableCell>
                                <TableCell sx={{padding: 1}}style={{ width: '50%' }} align="left"><a className="bumber">ФИО</a></TableCell>
                                <TableCell sx={{padding: 1}}style={{ width: '20%' }} align="left"><a className="bumber">ИИН</a></TableCell>
                                <TableCell sx={{padding: 1}}style={{ width: '15%' }} align="left"></TableCell>
                                <TableCell sx={{padding: 1}}style={{ width: '10%' }} align="left"></TableCell>
                            </TableRow>
                            </TableHead> 
                            {/* <TableBody>
                            { this.state.logs.length>0 ? this.state.logs.map((row, index) => (
                                <Row row={row} index={index} />
                            )): <TableCell  className="zeroResult" align="center" colSpan={4} style={{borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>}
                            </TableBody> */}
                        </Table>
                    </TableContainer>
                </div>
            </div>  
        </div>

    );
}

export default RightTopFrame;