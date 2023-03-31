import React, { useState, useEffect } from 'react';
import './rightBottomFrame.scss'

function RightBottomFrame(props) {
    return ( 

        <div className="right-bottom-section">
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

export default RightBottomFrame;