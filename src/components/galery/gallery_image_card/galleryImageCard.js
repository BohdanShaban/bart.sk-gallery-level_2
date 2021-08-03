import React, {Component} from "react";
import { Col } from "react-bootstrap"; 

import image from './pexels-photo-186077.jpeg'

import './galleryImageCard.sass';


export default class GalleryImageCard extends Component {
    


    render() {

        return (

            <Col lg={3} md={4} sm={6} >

                <div class="photo_item">
                    <div class="photo_img">
                        <img src={image} alt="img" />
                    </div>
                </div>

            </Col>
        )
    }
}