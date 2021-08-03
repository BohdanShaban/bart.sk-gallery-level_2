import React, {Component} from "react";
import { Col } from "react-bootstrap";  // lg={3} md={4} sm={6}
import {Link} from 'react-router-dom';

import no_image_yet from './no_photo_yet.jpeg'
import Spinner from '../../spinner'



import './galeryCategoryCard.sass';

export default class GaleryCategoryCard extends Component {

    state = {
        name: '',
        path: '',
        imgFullPath: '',
        srcImg: no_image_yet,

        loading: true
    }

    componentDidMount() {
        const {name, path, imgPath} = this.props;
        this.setState({name, path, loading: false});
        //console.log(`Gallery Name: ${this.state.name},  Gallery Path: ${this.state.path}`);

        if (typeof(imgPath) !== 'undefined') { 
            this.setState({
                srcImg: `http://api.programator.sk/images/300x200/${imgPath}`,
                loading: false
            });  
        }      
    }


    render() {

        const {name, path, srcImg, loading} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const card = !(loading) ? <CardView name={name} srcImg={srcImg} path={path}  /> : null;

        return (

            <Col lg={3} md={4} sm={6}>

                {spinner}
                {card}

            </Col>
        )
    }
}

const CardView = ({name, srcImg, path}) => {
    return (
        <>
            <Link to= { `/${path}/` } > 
                <div className="category_item">
                    <div className="categ_img">
                        <img src={srcImg} alt="img" /> 
                    </div>
                    <div className="categ_title"> {name} </div>
                </div>
            </Link>
        </>
    )
}