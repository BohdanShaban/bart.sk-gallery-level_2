import React, {Component} from "react";
import { Col } from "react-bootstrap"; 
import {withRouter, Link} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import '../cards.sass';


export class CategoryImageCard extends Component {

    state = { ImgUrl: null }

    componentDidMount() {
        const {fullImgPath} = this.props;
        this.setState({ ImgUrl: `http://api.programator.sk/images/200x250/${fullImgPath}` });
    }

    render() {

        let {url} = this.props.match;
        const {imgPath, onCardHover, onCardLeave} = this.props;
        const {ImgUrl} = this.state;

        return (
            <Col lg={3} md={4} sm={6} > 

                <Link to={`${url}${imgPath}`}  style={{ textDecoration: 'none' }} > 
                    <div className="card_item" onMouseEnter={ () => onCardHover(ImgUrl) }
                                               onMouseLeave={ () => onCardLeave() } > 

                        <div className="card_img">
                            <LazyLoadImage  width='100%' height='100%' objectFit='cover' className='photo' src={ ImgUrl } effect='blur' alt={imgPath} />
                        </div>
                    </div>
                </Link> 

            </Col>
        )
    }
}

export default withRouter(CategoryImageCard);