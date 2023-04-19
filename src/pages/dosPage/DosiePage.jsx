import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './dosiePage.scss'
import './loader.scss'

import Navbar from '../../components/nav-bar/Navbar';
import LeftTopFrame from '../../components/left-top-frame/LeftTopFrame';
import RightTopFrame from '../../components/rigth-top-frame/RightTopFrame';
import LeftBottomFrame from '../../components/left-bottom-frame/LeftBottomFrame';
import RightBottomFrame from '../../components/right-bottom-frame/RightBottomFrame';
import SearchBar from '../../components/search-bar/SearchBar';
import axios from 'axios';
const baseURL = 'http://localhost:9095/'
const DosiePage = (props) => {
    const [leftTopFrameData, setLeftTopFrameData] = useState({});
    const [docs, setDocs] = useState([])
    const [transport, setTransport] = useState([])
    const [relatives, setRelatives] = useState([])
    const [addresses, setAddresses] = useState([])
    const [photo, setPhoto] = useState([])
    const [base, setBase] = useState('')
    const { iin } = useParams();
    const [loading, isLoading] = useState(null)

    useEffect(() => {
        console.log(iin)
        const searchIIN = () => {
            isLoading(true)
            const params = {iin: iin}
            axios.get(baseURL+'profile', {params: params}).then(res => {
                console.log(res.data)
                setPhoto(res.data.photoDbf)
                setLeftTopFrameData(res.data.mvFls)
                setRelatives(res.data.fl_relatives)
                setBase(res.data.photoDbf[0].photo)
                setAddresses(res.data.regAddressFls)
                setDocs(res.data.mvIinDocs)
                setTransport(res.data.mvAutoFls)
                isLoading(false)
            })
        }
        searchIIN()
    }, [iin])

    if (base != '') {
        return (  
            <>
                <div className='dosiePage'>
                    <div className="central-bar">
                        <div className="frames">
                            <LeftTopFrame photo={base} data={leftTopFrameData}/>
                            <RightTopFrame relatives={relatives}/>
                            <LeftBottomFrame docs={docs} addresses={addresses} transport={transport}/>
                            <RightBottomFrame/>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (  
            <>
                <div className='load'>
                            <span class="loader"></span>
                </div>
                {/* <div className='dosiePage'>
                    <div className="central-bar">
                        <div className="frames">
                            <LeftTopFrame photo={base} data={leftTopFrameData}/>
                            <RightTopFrame relatives={relatives}/>
                            <LeftBottomFrame docs={docs} addresses={addresses} transport={transport}/>
                            <RightBottomFrame/>
                        </div>
                    </div>
                </div> */}
            </>
        );
    }

}

export default DosiePage;