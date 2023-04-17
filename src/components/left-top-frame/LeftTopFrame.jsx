import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './leftTopFrame.scss'

function LeftTopFrame(props) {
    const [photo, setPhoto] = useState('')
    const [first_name, setfirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const [patronymic, setpatronymic] = useState('')
    const [iin, setiin] = useState('')
    // const [first_name, setfirst_name] = useState('')
    // const [first_name, setfirst_name] = useState('')
    // const [first_name, setfirst_name] = useState('')
    useEffect(() => {
        console.log("lol", props)
        setPhoto(props.photo)
        setfirst_name(props.data[0].first_name)
        setlast_name(props.data[0].last_name)
        setpatronymic(props.data[0].patronymic)
        setiin(props.data[0].iin)
    })
    // const [iin, setIIN] = useState("")
    //
    // const handleKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //
    //         if (event.target.value !== iin) {
    //             setIIN(event.target.value)
    //             console.log(event.target.value)
    //             props.fetchIIN(event.target.value)
    //         }
    //     }
    // }

    return ( 
        <div className="left-top-section">
            <div className="first-line">
                <div className="avatar">
                    <img src={"data:image/png;base64, " + photo} alt="No Image" />
                </div>    
                <div className='person-main-info'>
                    <div>
                        <label htmlFor="pName">Имя</label>
                        <input readOnly type="text" name="pName" value={first_name || "---"} className={props.data.fName ? "" : "disabledInput"} id="pName" placeholder='Салтанат' />
                    </div>
                    <div>
                        <label htmlFor="pFam">Фамилия</label>
                        <input readOnly type="text" name="pFam" value={last_name || "---"} className={props.data.lName ? "" : "disabledInput"} id="pFam" placeholder='Бибер' />
                    </div>
                    <div>
                        <label htmlFor="pOtch">Отчество</label>
                        <input readOnly type="text" name="pOtch" value={patronymic || "---"} className={props.data.fathName ? "" : "disabledInput"} id="pOtch" placeholder='---' />
                    </div>
                    <div>
                        <label htmlFor="pIIN">ИИН</label>
                        <input readOnly value={iin || "---"} type="text" name="pIIN" id="pIIN" />
                    </div>
                </div>
            </div> 
            <div className="other-line">
                {/* <div>
                    <label htmlFor="born-city">Дата рождения</label>
                    <input type="text" name="born-city" value={props.data[0].birth_date || "---"} className="disabledInput" id="born-city" placeholder='' />
                </div>
                <div>
                    <label htmlFor="nationality">Национальность</label>
                    <input type="text" name="nationality" value={props.data[0].nationality_ru_name || "---"} className="disabledInput" id="nationality" placeholder='Казашка' />
                </div>
                <div>
                    <label htmlFor="citizenship">Гражданство</label>
                    <input type="text" name="citizenship" value={props.data[0].citizenship_ru_name || "---"} className="disabledInput" id="citizenship" placeholder='Казахстан' />
                </div> */}
            </div>   
        </div>
    );
}

export default LeftTopFrame;