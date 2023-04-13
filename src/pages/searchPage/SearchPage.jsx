import React, { useState, useEffect } from 'react';
import './searchPage.scss'

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import Navbar from '../../components/nav-bar/Navbar';
import TabContent_IIN from '../../components/tab-content-iin/TabContent_IIN';
import TabContent_FIO from '../../components/tab-content-fio/TabContent_FIO';
import TabConent_BIN from '../../components/tab-content-bin/TabContent_BIN';

const Search = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Navbar/>
            <div className='searchPage'>
                <div className='searchtabs'>
                    <div className="tab-wrap">
                        <input type="radio" id="tab0" name="tabGroup2" className="tab" disabled style={{cursor: 'default'}}/>
                        <label htmlFor="tab0" style={{cursor:"default"}}></label>

                        <input type="radio" id="tab4" name="tabGroup2" className="tab" defaultChecked/>
                        <label htmlFor="tab4">ИИН</label>

                        <input type="radio" id="tab5" name="tabGroup2" className="tab"></input>
                        <label htmlFor="tab5">ФИО</label>

                        <input type="radio" id="tab6" name="tabGroup2" className="tab"></input>
                        <label htmlFor="tab6">БИН</label>

                        <input type="radio" id="tab7" name="tabGroup2" className="tab"></input>
                        <label htmlFor="tab7">Наименование ЮЛ</label>
                        
                        <input type="radio" id="tab0" name="tabGroup2" className="tab" style={{cursor: 'default'}}></input>
                        <label htmlFor="tab0" style={{cursor:"default"}}></label>
                        
                        
                        <input type="radio" id="tab0" name="tabGroup2" className="tab" style={{cursor: 'default'}}></input>
                        <label htmlFor="tab0" style={{cursor:"default"}}></label>
                        
                        
                        <input type="radio" id="tab0" name="tabGroup2" className="tab" style={{cursor: 'default'}}></input>
                        <label htmlFor="tab0" style={{cursor:"default"}}></label>
                        
                        <div className="tab__content">
                        </div>

                        <TabContent_IIN/>
                        <TabContent_FIO/>
                        <TabConent_BIN/>

                        <div className="tab__content">
                        </div>
                        <div className='tab__result'>
                            RES
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Search;