import React, { useState, useEffect } from 'react';

function DopInfoBlock(props) {
    return ( 
        <div className="dopInfoBlock">
            <div>
                <label htmlFor="">Дата рождения с</label>
                <input type="text" id='' />
            </div>
            <div>
                <label htmlFor="">Дата рождения по</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Пол</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Нация</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Страна</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Город</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
        </div>
    );
}

export default DopInfoBlock;