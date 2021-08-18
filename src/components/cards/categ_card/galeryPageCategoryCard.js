import React, {Component} from "react";
import { Col } from "react-bootstrap";  // lg={3} md={4} sm={6}
import {Link} from 'react-router-dom';

import no_image_yet from './no_photo_yet.jpeg'
import Spinner from '../../spinner'



import '../cards.sass';

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
                srcImg: `http://api.programator.sk/images/200x250/${imgPath}`,
                loading: false
            });  
            //console.log(`GaleryCategoryCard: srcImg:${this.state.srcImg}`)

        }      
    }


    render() {

        const {name, path, srcImg, loading} = this.state;
        const {onCardHover, onCardLeave} = this.props;

        const spinner = loading ? <Spinner/> : null;
        const card = !(loading) ? <CardView name={name} srcImg={srcImg} path={path} onCardHover={onCardHover} onCardLeave={onCardLeave} /> : null;

        return (

            <Col lg={3} md={4} sm={6}>

                {spinner}
                {card}

            </Col>
        )
    }
}

const CardView = ({name, srcImg, path, onCardHover, onCardLeave}) => {
    return (
        <>
            <Link to= { `/${path}/` } style={{ textDecoration: 'none' }} > 
                <div className="card_item" onMouseEnter={ () => onCardHover(srcImg) } onMouseLeave={ () => onCardLeave() } >
                    <div className="card_img" style={{height: '157px'}} >
                        <img src={srcImg} alt="IMG" /> 
                    </div>
                    <div className="card_title"> {name} </div>
                </div>
            </Link>
        </>
    )
}