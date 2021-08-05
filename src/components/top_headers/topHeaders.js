import React from "react";
import { Col } from "react-bootstrap";
import {Link} from 'react-router-dom';

import arrowImg from './left_arrow.svg'

import './topHeaders.sass';

const TopHeaders = ({subHeaderTxt, withBackBtn = false}) => {
    const backBtn = withBackBtn ? <BackBtnView/> : null;

    return (

        // <!--  HEADER & SUB-HEADER & DIVIDER  -->
        <Col md={12}>
            
            <h1>Fotogaleria</h1>
            
            <div className="sub_header_wrapper">          
                {backBtn}
                <h2 className="sub_header"> {subHeaderTxt} </h2>
            </div>

            <div className="sub_header_divider"></div>
        </Col>
    )
}

export default TopHeaders;

const BackBtnView = () => {
    return (
        <>
            <Link to= '/' className='back_btn__link' style={{ textDecoration: 'none' }}> 
                <img src={arrowImg} alt="arrow"/>
            </Link>
        </>
    )
}