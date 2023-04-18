import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import SearchedTable from '../../components/searchedTable/SearchedTable';
import './tabContent_fio.scss'

import DopInfoBlock from '../dop-info-block/DopInfoBlock';

const selectStyle = {
    width: '200px',
    height: '35px',
    alignSelf: "flex-end",

    backgroundColor: '#0D0F11',
    color: '#fff',

    outline: "none",
    border: '1px solid #565656',
    borderRadius: '2px',
    
    display: "flex",
    flexDirection: "row",
}

function TabContent_FIO(props) {
    const [showDopInfo, setShowDopInfo] = useState(false)

    const [fnameType, setFnameType] = useState('begin')
    const [lnameType, setLnameType] = useState('begin')
    const [fathNameType, setFathNameType] = useState('begin')

    return ( 
        <div className="tab__content">
            <div className="searchForm">
                <div>
                    <Select value={fnameType} onChange={event => {
                        console.log(event)
                    }} inputProps={{ 'aria-label': 'Without label' }} style={selectStyle}>
                        <MenuItem value={"begin"} onClick={(event) => {
                            setFnameType(event.target.dataset.value)
                        }}>Начинается с</MenuItem>
                        <MenuItem value={"have"} onClick={(event) => {
                            setFnameType(event.target.dataset.value)
                        }}>Содержит</MenuItem>
                        <MenuItem value={"ends"} onClick={(event) => {
                            setFnameType(event.target.dataset.value)
                        }}>Заканчивается на</MenuItem>
                    </Select>
                    <div>
                        <label htmlFor="fname">Имя</label>
                        <input type="text" name="fname" id="fname" />
                    </div>
                </div>
                <div>
                    <Select value={lnameType} inputProps={{ 'aria-label': 'Without label' }} style={selectStyle}>
                        <MenuItem value={"begin"} onClick={(event) => {
                            setLnameType(event.target.dataset.value)
                        }}>Начинается с</MenuItem>
                        <MenuItem value={"have"} onClick={(event) => {
                            setLnameType(event.target.dataset.value)
                        }}>Содержит</MenuItem>
                        <MenuItem value={"ends"} onClick={(event) => {
                            setLnameType(event.target.dataset.value)
                        }}>Заканчивается на</MenuItem>
                    </Select>
                    <div>
                        <label htmlFor="lName">Фамилия</label>
                        <input type="text" name="lName" id="lName" />
                    </div>
                </div>
                <div>
                <Select value={fathNameType} inputProps={{ 'aria-label': 'Without label' }} style={selectStyle}>
                    <MenuItem value={"begin"} onClick={(event) => {
                        setFathNameType(event.target.dataset.value)
                    }}>Начинается с</MenuItem>
                    <MenuItem value={"have"} onClick={(event) => {
                        setFathNameType(event.target.dataset.value)
                    }}>Содержит</MenuItem>
                    <MenuItem value={"ends"} onClick={(event) => {
                        setFathNameType(event.target.dataset.value)
                    }}>Заканчивается на</MenuItem>
                </Select>
                    <div>
                        <label htmlFor="fathName">Отчество</label>
                        <input type="text" name="fathName" id="fathName" />
                    </div>
                </div>
            </div>

            <div className='dopInfa'>

                <div onClick={() => setShowDopInfo((prev) => !prev)}>
                    <div>Дополнительные данные</div>
                    <div>{showDopInfo ? "HideIcon" : "ShowIcon"}</div>
                </div>
                <DopInfoBlock show={showDopInfo}/>
            </div>

            <div style={{display: "flex", justifyContent: "flex-start", paddingLeft: "70%"}}>
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

            <div className='searchResultBlock'>
                <p>Результат</p>
                <SearchedTable/>
            </div>
        </div>
    );
}

export default TabContent_FIO;