import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './dosiePage.scss'

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
    const [relatives, setRelatives] = useState([])
    const [photo, setPhoto] = useState([])
    const [base, setBase] = useState('')
    const { iin } = useParams();
    const [loading, isLoading] = useState(null)

    useEffect(() => {
        console.log(iin)
        const searchIIN = () => {
            isLoading(true)
            const params = {iin: iin}
            // console.log(params)
            axios.get(baseURL+'profile', {params: params}).then(res => {
                console.log(res.data)
                setPhoto(res.data.photoDbf)
                setLeftTopFrameData(res.data.mvFls)
                setRelatives(res.data.fl_relatives)
                setBase(res.data.photoDbf[0].photo)
                isLoading(false)
            })
        }
        searchIIN()
    }, [iin])
    // const fetchIIN = (iin) => {
    //     console.log("changed to ", iin)
    //     let resData = {
    //         "fName": "Мадияр",
    //         "lName": "Куанышбеков",
    //         "fathName": "Еркебуланулы",
    //         "bornCity": "Ботакара",
    //         "nationality": "Казак",
    //         "citizenship": "Казахстан",
    //         "SudInfo_1": "Sud_1",
    //         "SudInfo_2": "Sud_2",
    //     }
    //
    //     setLeftTopFrame(resData)
    // }

    // const setLeftTopFrame = (data) => {
    //     let dataKeys = ["fName", "lName", "fathName", "bornCity", "nationality", "citizenship", "avatarImg"]
    //     let obj = {}

    //     dataKeys.map(key => {
    //         obj[key] = data[key] 
    //     })

    //     setLeftTopFrameData(obj)
    // }

    if (base == '') {
        return (  
            <>
                <Navbar/>
                <div className='dosiePage'>
                    <div className="central-bar">
                        {/* <SearchBar/> */}
                        <div className="frames">
                            <LeftTopFrame photo={base} data={leftTopFrameData}/>
                            <RightTopFrame/>
                            <LeftBottomFrame/>
                            <RightBottomFrame/>
                        </div>
                    </div>
                    
                </div>
            </>
        );
    } else {
        return (  
            <>
                <Navbar/>
                <div className='dosiePage'>
                    <div className="central-bar">
                        {/* <SearchBar/> */}
                        <div className="frames">
                            Loading
                        </div>
                    </div>
                    
                </div>
            </>
        );
    }

}

export default DosiePage;