import React, {Component} from "react";

import image from './pexels-photo-186077.jpeg'
import { Col } from "react-bootstrap";
// lg={3} md={4} sm={6}


import './appGaleryCard.sass';
export default class AppGaleryCard extends Component {


    render() {

        const {title} = this.props;

        return (

            <Col lg={3} md={4} sm={6}>

                <div className="category_item">
                    <div className="categ_img">
                        <img src={image} alt="img" /> 
                    </div>
                    <div className="categ_title"> {title} </div>
                </div>
            </Col>
        )
    }
}