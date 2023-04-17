import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function RightTopFrame() {

    const relatives = [
        {
            fio: "ЕСЕНУЛЫ ТЕМИРЛАН",
            iin: '040205551504',
            birth_location: 'ЖЕТИСАЙ',
            nationality: 'КАЗАХ',
            citezenship: 'КАЗАХСТАН',
            birth_date: '2004-02-05',
            address: 'ЫКЫЛАС ДУКЕНУЛЫ 38'
        },
        {
            fio: "БЕГЕНОВ ДАМИР",
            iin: '040219523323',
            birth_location: 'ХРОМТАУ',
            nationality: 'КАЗАХ',
            citezenship: 'КАЗАХСТАН',
            birth_date: '2004-02-10',
            address: 'УЛЫ ДАЛА 27/3'
        }
    ]


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
                    <label htmlFor="born-city" style={{fontSize: '15px', fontWeight: '600'}}>Родственники</label>
                    <TableContainer>
                        <Table aria-label="collapsible table" className="uitable">
                            <TableHead>
                            <TableRow className="uitableHead"  style={{borderBottom: 'hidden'}}>
                                <TableCell sx={{padding: 1}} style={{ width: '5%',fontSize: '12px', color: "#6D6D6D"}} align="left"><a>№</a></TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "#6D6D6D" }} align="left"><a className="bumber">ФИО</a></TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '20%', fontSize: '12px', color: "#6D6D6D" }} align="left"><a className="bumber">ИИН</a></TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '15%', color: "#6D6D6D" }} align="left"></TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '10%', color: "#6D6D6D" }} align="left"></TableCell>
                            </TableRow>
                            </TableHead> 
                            <TableBody style={{borderBottom: 'hidden'}}>
                            { relatives.length>0 ? relatives.map((row, index) => (
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
          <TableCell sx={{padding: 1}} style={{fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{props.index + 1}</a></TableCell>
          <TableCell sx={{padding: 1}} style={{ width: '60%', paddingLeft: '18px', fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.fio}</a></TableCell>
          <TableCell sx={{padding: 1}} style={{ paddingLeft: '18px', fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }}><a>{row.iin}</a></TableCell>
          <TableCell sx={{padding: 1}} style={{fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }}><a>Перейти...</a></TableCell>
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
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1, marginLeft: '20px' }}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow style={{borderBottom: 'hidden'}}>
                      <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Место рождения</a></TableCell>
                      <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.birth_location}</a></TableCell>
                    </TableRow>
                    <TableRow style={{borderBottom: 'hidden'}}>
                      <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Национальность</a></TableCell>
                      <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.nationality}</a></TableCell>
                    </TableRow>
                    <TableRow style={{borderBottom: 'hidden'}}>
                      <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Гражданство</a></TableCell>
                      <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.citezenship}</a></TableCell>
                    </TableRow>
                    <TableRow style={{borderBottom: 'hidden'}}>
                      <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Дата рождения</a></TableCell>
                      <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.birth_date}</a></TableCell>
                    </TableRow>
                    <TableRow style={{borderBottom: 'hidden'}}>
                      <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }} align="left"><a>Адресс прописки</a></TableCell>
                      <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF"}} align="left"><a>{row.address}</a></TableCell>
                    </TableRow>
                    {/* <TableRow style={{borderBottom: 'hidden'}}>
                      <TableCell style={{ width: '20%' }} align="left"><a>Связи</a></TableCell>
                      <TableCell style={{ width: '80%' }} align="left"><a>{row.request_rels.length>0 ? row.request_rels.join(','): "Связи не установлены"}</a></TableCell>
                    </TableRow> */}
                  </TableHead>
                </Table>
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

export default withParams(RightTopFrame);

// export default RightTopFrame;