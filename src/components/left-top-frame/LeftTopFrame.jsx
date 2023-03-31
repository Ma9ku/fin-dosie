import React, { useState, useEffect } from 'react';
import './leftTopFrame.scss'

function LeftTopFrame(props) {
    const [iin, setIIN] = useState("")

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {

            if (event.target.value !== iin) {
                setIIN(event.target.value)
                console.log(event.target.value)
                props.fetchIIN(event.target.value)
            }
        }
    }

    return ( 
        <div className="left-top-section">
            <div className="first-line">
                <div className="avatar">
                    <img src={props.data.avatarImg} alt="No Image" />    
                </div>    
                <div className='person-main-info'>
                    <div>
                        <label htmlFor="pName">Имя</label>
                        <input readOnly type="text" name="pName" value={props.data.fName || "---"} className={props.data.fName ? "" : "disabledInput"} id="pName" placeholder='Салтанат' />
                    </div>
                    <div>
                        <label htmlFor="pFam">Фамилия</label>
                        <input readOnly type="text" name="pFam" value={props.data.lName || "---"} className={props.data.lName ? "" : "disabledInput"} id="pFam" placeholder='Бибер' />
                    </div>
                    <div>
                        <label htmlFor="pOtch">Отчество</label>
                        <input readOnly type="text" name="pOtch" value={props.data.fathName || "---"} className={props.data.fathName ? "" : "disabledInput"} id="pOtch" placeholder='---' />
                    </div>
                    <div>
                        <label htmlFor="pIIN">ИИН</label>
                        <input type="text" name="pIIN" id="pIIN" 
                            onKeyDown={handleKeyDown}/>
                    </div>
                </div>
            </div> 
            <div className="other-line">
                <div>
                    <label htmlFor="born-city">Место рождения</label>
                    <input type="text" name="born-city" value={props.data.bornCity || "---"} className="disabledInput" id="born-city" placeholder='' />
                </div>
                <div>
                    <label htmlFor="nationality">Национальность</label>
                    <input type="text" name="nationality" value={props.data.nationality || "---"} className="disabledInput" id="nationality" placeholder='Казашка' />
                </div>
                <div>
                    <label htmlFor="citizenship">Гражданство</label>
                    <input type="text" name="citizenship" value={props.data.citizenship || "---"} className="disabledInput" id="citizenship" placeholder='Казахстан' />
                </div>
            </div>   
        </div>
    );
}

export default LeftTopFrame;