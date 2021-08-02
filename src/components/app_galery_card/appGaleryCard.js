import React, {Component} from "react";

import image from './pexels-photo-186077.jpeg'

import './appGaleryCard.sass';


export default class AppGaleryCard extends Component {


    render() {

        return (

            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="category_item">
                    <div className="categ_img">
                        <img src={image} alt="img" /> 
                    </div>
                    <div className="categ_title">priroda</div>
                </div>
            </div>
        )
    }
}