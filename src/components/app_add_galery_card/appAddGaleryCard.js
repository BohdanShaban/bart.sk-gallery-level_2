import React, {Component} from "react";
import { Col } from "react-bootstrap";
// lg={3} md={4} sm={6}

import icon from './add_category.png'

import './appAddGaleryCard.sass';


export default class AppAddGaleryCard extends Component {


    render() {

        return (

            // <!-- ADD NEW CATEGORY  CARD  -->

            <Col lg={3} md={4} sm={6}>
                
                <div className="category_item__add_categ">

                    <a className="categ_img__add_categ" href="/#">
                        <img src={icon} alt="img" />
                    </a>
                    <div className="categ_title__add_categ">pridat kategoriu</div>

                </div>
            </Col>
        )
    }
}