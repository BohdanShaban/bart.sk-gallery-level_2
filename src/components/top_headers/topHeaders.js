import React from "react";
import { Col } from "react-bootstrap";



import './topHeaders.sass';

const TopHeaders = ({subHeaderTxt}) => {


    return (

        // <!--  HEADER & SUB-HEADER & DIVIDER  -->
        <Col md={12}>
            
            <h1>Fotogaleria</h1>
            <h2 className="sub_header"> {subHeaderTxt} </h2>
            <div className="sub_header_divider"></div>
        </Col>
    )
}

export default TopHeaders;