import React, { useState, useEffect } from 'react';
import './leftBottomFrame.scss'


function LeftBottomFrame() {
    return ( 

        <div className="left-bottom-section">
            <div className="other-line">
                <div>
                    <label htmlFor="born-city">Место рождения</label>
                    <input type="text" name="born-city" value={"---"} className="disabledInput" id="born-city" placeholder='' />
                </div>
                <div>
                    <label htmlFor="nationality">Национальность</label>
                    <input type="text" name="nationality" value={"---"} className="disabledInput" id="nationality" placeholder='Казашка' />
                </div>
                <div>
                    <label htmlFor="citizenship">Гражданство</label>
                    <input type="text" name="citizenship" value={"---"} className="disabledInput" id="citizenship" placeholder='Казахстан' />
                </div>
            </div>   
        </div>

    );
}

export default LeftBottomFrame;