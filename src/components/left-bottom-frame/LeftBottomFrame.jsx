import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './leftBottomFrame.scss'

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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function LeftBottomFrame() {
    const data = [
        {
            name: "УДОСТОВЕРЕНИЕ РК",
            message: null,
            dop_infa: {
                org_name: {
                    name: "Орган выдачи",
                    value: "Министерство Внутренних Дел РК"
                },
                start_date: {
                    name: "Дата выдачи",
                    value: "2020-03-02"
                },
                end_date: {
                    name: "Срок до",
                    value: "2030-03-01"
                },
                doc_name: {
                    name: "Номер документа",
                    value: "047556612"
                }
            }
        },
        {
            name: "ПАСПОРТ РК",
            message: "Документ не найден",
            dop_infa: null
        },
        {
            name: "Транспорт",
            message: null,
            dop_infa: {
                car_num: 1,
                cars: [
                    {
                        num: 1,
                        model: "BMW",
                        serial_num: "123123",
                        number: "№123123"
                    }
                ]
            }
        }
    ]

    return ( 

        <div className="left-bottom-section">
            <div className="other-line">
                <div>
                    <TableContainer>
                        <Table aria-label="collapsible table" className="uitable">
                            <TableBody style={{borderBottom: 'hidden'}}>
                            { data.length>0 ? data.map((row, index) => (
                                <Row row={row} index={index} />
                            )): <TableCell  className="zeroResult" align="center" colSpan={4} style={{borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>   
        </div>

    );
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
          <TableCell sx={{padding: 1}} style={{fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{props.row.name}</a></TableCell>
          <TableCell sx={{padding: 1}}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon style={{ fill: '#ffffff' }}/> : <KeyboardArrowDownIcon style={{ fill: '#ffffff' }}/>}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow style={{borderBottom: 'hidden'}}>
          <TableCell sx={{padding: 1}} style={{ paddingBottom: 0, paddingTop: 0}} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 0, marginLeft: '0' }}>
                {
                    row.message == null 
                    ?
                    <Table size="small" aria-label="purchases">
                            {
                                row.name != "Транспорт"
                                ?
                                <TableBody style={{padding: 0, borderBottom: 'hidden'}}>{
                                Object.keys(row.dop_infa).map(key => {
                                    return (

                                        <TableRow style={{borderBottom: 'hidden', width: "100%"}}>
                                            <TableCell sx={{p: 0}} style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>{row.dop_infa[key].name}</a></TableCell>
                                            <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF"}} align="left"><a>{row.dop_infa[key].value}</a></TableCell>
                                        </TableRow>
                                    )
                                })
                                }</TableBody>
                                :
                                <>
                                <TableHead>
                                <TableRow className="uitableHead"  style={{borderBottom: 'hidden'}}>
                                    <TableCell sx={{padding: 1}} style={{ width: '5%',fontSize: '12px', color: "#6D6D6D"}} align="left"><a>№</a></TableCell>
                                    <TableCell sx={{padding: 1}} style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }} align="left"><a className="bumber">Модель</a></TableCell>
                                    <TableCell sx={{padding: 1}} style={{ width: '25%', fontSize: '12px', color: "#6D6D6D" }} align="left"><a className="bumber">Серийный номер</a></TableCell>
                                    <TableCell sx={{padding: 1}} style={{ width: '25%', color: "#6D6D6D" }} align="left">Номер</TableCell>
                                </TableRow>
                                </TableHead> 
                                <TableBody style={{borderBottom: 'hidden'}}>
                                { 
                                    row.dop_infa.car_num > 0 ? row.dop_infa.cars.map(car => {
                                        return (
                                        <>
                                            <TableCell sx={{padding: 1}} style={{ width: '5%', fontSize: '12px', color: "#FFFFFF"}} align="left"><a>{car.num}</a></TableCell>
                                            <TableCell sx={{padding: 1}} style={{ width: '30%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a className="bumber">{car.model}</a></TableCell>
                                            <TableCell sx={{padding: 1}} style={{ width: '25%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a className="bumber">{car.serial_num}</a></TableCell>
                                            <TableCell sx={{padding: 1}} style={{ width: '25%', fontSize: '12px', color: "#FFFFFF" }} align="left">{car.number}</TableCell>
                                        </>
                                        )
                                    }) 
                                    : 
                                    <TableCell  className="zeroResult" align="center" colSpan={4} style={{borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>
                                }
                                </TableBody>
                                </>
                            }

                    </Table>
                    :
                    <p style={{
                        color: "#FFFFFF"
                    }}>{row.message}</p>
                }
                
                
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

function withParams(Component) {
    return props => <Component {...props} username={useParams()} />;
}

export default withParams(LeftBottomFrame);