import React, {Component} from "react";
import { Col } from "react-bootstrap"; 

import image from './pexels-photo-186077.jpeg'

import './categoryImageCard.sass';


export default class CategoryImageCard extends Component {
    


    render() {

        const {name, imgPath} = this.props;

        return (

            <Col lg={3} md={4} sm={6} >

                <div class="photo_item">
                    <div class="photo_img">
                        <img src={ `http://api.programator.sk/images/400x300/${imgPath}` } alt={name} />
                    </div>
                </div>

            </Col>
        )
    }
}