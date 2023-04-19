import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import SearchedTable from '../../components/searchedTable/SearchedTable';

import './tabContent_iin.scss'

const inputStyle = {
    height: "3px", 
    color: "#fff", 
    fontFamily: 'Montserrat', 
    fontStyle: "normal", 
    fontWeight: 500, 
    fontSize: "14px", 
    lineHeight: "16px",
    // width: '300px',
}

const baseURL = 'http://localhost:9095/'

function TabConent_IIN(props) {
    const [iin, setIIN] = React.useState('');
    const [result, setResult] = React.useState(null);

    const handleIIN = (event) => {
        setIIN(event.target.value)
    }
    const searchIIN = async () => {
        const params = {iin: iin}
        console.log(params)
        axios.get(baseURL+'iin', {params: params}).then(res => {
            console.log(res.data)
            setResult(res.data)
        })
    }
    return ( 
        <div className="tab__content">
            <div className='displayFlexTwoColumns'>
                <div>
                    <FormControl sx={{
                            marginLeft: 8, 
                            width: '70%', 
                            marginBottom: '20px',
                        }} fullWidth> 
                        <a className='fieldText' style={{
                                marginBottom: '5px', 
                                marginLeft: '10px'
                            }}>ИИН</a>
                        <div style={{ 
                                display: 'flex', 
                                marginLeft: '0 auto' 
                            }}>

                            <TextField sx={{ 
                                    height: '34px', 
                                    flex: 1, 
                                    borderRadius: "4px"
                                }} 
                                id="outlined-basic" 
                                inputProps={{ style: inputStyle,'aria-label': 'Without label' }} 
                                value={iin}
                                onChange={handleIIN}
                                variant="outlined" />
                            <Button sx={{
                                    height: '34px', 
                                    backgroundColor: "#33B6FF", 
                                    color: 'white', 
                                    width: 'fit-content', 
                                    marginLeft: 3 
                                }} variant="contained"
                                onClick={searchIIN}>
                                <span className='buttonSearch'>Запрос</span>
                            </Button>
                        </div>
                    </FormControl>
                    <FormControl sx={{ 
                            marginLeft: 8, 
                            width: '70%', 
                            marginBottom: '20px' 
                        }} fullWidth>
                        <a className='fieldText' style={{
                                marginBottom: '5px', 
                                marginLeft: '10px'
                            }}>Номер документа</a>
                        <div style={{ 
                                display: 'flex', 
                                marginLeft: '0 auto'
                            }}>
                            <TextField sx={{
                                    height: '34px', 
                                    flex: 1, 
                                    // border: "1px solid #565656", 
                                    borderRadius: "4px",
                                }} id="outlined-basic"
                                inputProps={{ style: inputStyle, 'aria-label': 'Without label' }} 
                                variant="outlined" />
                            <Button sx={{
                                    height: '34px', 
                                    backgroundColor: "#33B6FF", 
                                    color: 'white', 
                                    width: 'fit-content', 
                                    marginLeft: 3 
                                }} variant="contained">
                                <span className='buttonSearch'>Запрос</span>
                            </Button>
                        </div>
                    </FormControl>
                    <FormControl sx={{ 
                            marginLeft: 8, 
                            width: '70%', 
                            marginBottom: '20px' 
                        }} fullWidth>
                        <a className='fieldText' style={{
                                marginBottom: '5px', 
                                marginLeft: '10px'
                            }}>Номер телефона</a>
                        <div style={{ 
                                display: 'flex', 
                                marginLeft: '0 auto' 
                            }}>
                            <TextField sx={{ 
                                    height: '34px', 
                                    flex: 1, 
                                    // border: "1px solid #565656", 
                                    borderRadius: "4px" 
                                }} 
                                id="outlined-basic" 
                                inputProps={{ style: inputStyle,'aria-label': 'Without label' }} 
                                variant="outlined" />
                            <Button sx={{
                                    height: '34px', 
                                    backgroundColor: "#33B6FF", 
                                    color: 'white', 
                                    width: 'fit-content', 
                                    marginLeft: 3 
                                }} variant="contained">
                                <span className='buttonSearch'>Запрос</span>
                            </Button>
                        </div>
                    </FormControl>
                    <FormControl sx={{
                            marginLeft: 8, 
                            width: '70%', 
                            marginBottom: '20px' 
                        }} fullWidth>
                        <a className='fieldText' style={{
                                marginBottom: '5px', 
                                marginLeft: '10px'
                            }}>Электронная почта</a>
                        <div style={{ 
                                display: 'flex', 
                                marginLeft: '0 auto' 
                            }}>
                            <TextField sx={{ 
                                    height: '34px', 
                                    flex: 1, 
                                    // border: "1px solid #565656", 
                                    borderRadius: "4px" 
                                }} 
                                id="outlined-basic" 
                                inputProps={{ style: inputStyle,'aria-label': 'Without label' }} 
                                variant="outlined" />
                            <Button sx={{
                                    height: '34px', 
                                    backgroundColor: "#33B6FF", 
                                    color: 'white', 
                                    width: 'fit-content', 
                                    marginLeft: 3 
                                }} variant="contained">
                                <span className='buttonSearch'>Запрос</span>
                            </Button>
                        </div>

                        
                    </FormControl>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>

            <div className='searchResultBlock'>
                <p>Результат</p>
                <SearchedTable result={result}/>
            </div>
        </div>
    );
}

export default TabConent_IIN;