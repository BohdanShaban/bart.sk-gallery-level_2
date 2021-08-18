import React, {Component} from "react";
import { Col } from "react-bootstrap";  // lg={3} md={4} sm={6}
import {Link} from 'react-router-dom';
import GalleryService from "../../services/galery_service";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import no_image_yet from './no_photo_yet.jpeg'

import '../cards.sass';

export default class GaleryCategoryCard extends Component {
    galleryService = new GalleryService();

    state = {
        srcImg: no_image_yet,
        images: null,
        imgsCount: 0,
        isHoverAtMoment: false
    }

    componentDidMount() {
        this.undefImgPathHandle();

        // state.images setState
        this.setImagesToState(this.props.path);
    }

    undefImgPathHandle = () => {
        const {imgPath} = this.props;

        if (typeof(imgPath) !== 'undefined') { 
            this.setState({
                srcImg: `http://api.programator.sk/images/200x250/${imgPath}`
            });  
        }
    }
    setImagesToState = (path) => {

        this.galleryService.getCategoryImages(path)
            .then( (allImages) => {
                this.setState({images: allImages.images})
            })
            .then( () => {
                // state.imgsCount setState
                this.setState({imgsCount: this.state.images.length});  
            })
    }
    onHoverHandler = () => {
        const {onCardHover} = this.props;
        onCardHover(this.state.srcImg);
        this.setState({isHoverAtMoment: true});
    }
    onLeaveHandler = () => {
        this.props.onCardLeave();
        this.setState({isHoverAtMoment: false});
    }

    render() {

        const {srcImg, isHoverAtMoment, imgsCount} = this.state;
        const { name, path} = this.props;

        return (

            <Col lg={3} md={4} sm={6}>

                <Link to= { `/${path}/` } style={{ textDecoration: 'none' }} > 
                    <div className="card_item" onMouseEnter={ this.onHoverHandler } onMouseLeave={ this.onLeaveHandler } >
                        <div className="card_img"  style={{height: '157px'}} >
                            <LazyLoadImage width='100%' height='100%' objectFit='cover' src={srcImg} effect='blur' alt={name} /> 
                        </div>
                        <div className="card_title"> {name} </div>
                        { isHoverAtMoment ? <div className="grop_or"> {imgsCount} fotiek</div> : null }
                    </div>
                </Link>

            </Col>
        )
    }
}