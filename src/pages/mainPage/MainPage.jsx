import React, { useState, useEffect } from 'react';
import './mainPage.scss'

import Navbar from '../../components/nav-bar/Navbar';

import itapLogo from './../../images/itap-logo.png'
import supersetLogo from './../../images/superset-logo.png'
import profilerLogo from './../../images/profiler-logo.png'

function MainPage(props) {
    return ( 
    <>
        <Navbar/>
        <div className='mainPage'>
            <div className='background-layer2'></div>
            <div className="central-bar">
                
                <div className="services-block">
                    <div className="service-row">
                        <div classNamec="service width-260">
                            <div>
                                <img src={itapLogo} alt="itap-logo" />
                                <p>ITAP</p> 
                            </div>
                        </div>

                        <div className="service width-350">
                            <div>
                                <img src={supersetLogo} alt="itap-logo" />
                                <p>SUPERSET</p>
                            </div>
                        </div>  
                        <div className="service width-260">
                            <div>
                                <img src={profilerLogo} alt="itap-logo" />
                                <p>Profiler</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </>
    );
}

export default MainPage;