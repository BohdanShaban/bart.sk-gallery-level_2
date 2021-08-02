import React from "react";
import { Col } from "react-bootstrap";



import './galeryHeader.sass';

const GaleryHeader = () => {


    return (

        // <!--  HEADER & SUB-HEADER & DIVIDER  -->
        <Col md={12}>
            
            <h1>Fotogaleria</h1>
            <h2 className="sub_header">kategorie</h2>
            <div className="sub_header_divider"></div>
        </Col>
    )
}

export default GaleryHeader;