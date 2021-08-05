import React from "react";
import {Link} from 'react-router-dom';

import closeImg from './close.png'

import './modals_common_elms.sass'

const ModalTopCloseBtn = () => {


    return (
        <div className="close_btn_wrapper">
            <Link to= '/' className="close_btn" style={{ textDecoration: 'none' }}>
                <img src={closeImg} alt="Close"/>
                <div className="btn_text">ZAVRIET</div>
            </Link>
        </div>
    )
}

export default ModalTopCloseBtn;