import React, {Component} from "react";
import { Col } from "react-bootstrap";
import {withRouter} from 'react-router-dom';

import addCategImg from './add_category.png'
import addPhotoImg from './add_photo.png'


import '../cards.sass';

// <!-- ADD NEW CATEGORY/PHOTO  CARD  -->

export class AddCard extends Component {

    render() {
        const {addCategory} = this.props;

        const imgSrc = addCategory ? addCategImg : addPhotoImg;
        const titleText = addCategory ? 'kategóriu' : 'fotky';
        const linkTo = addCategory ? 'categoryAddModal' : 'photoAddModal'; 

        return (

            <Col lg={3} md={4} sm={6}>
                {/* <Link to={linkTo}  style={{ textDecoration: 'none' }}>  */}
                <div    className="card_item__add_card"
                        onClick={ () => this.props.history.push(linkTo) } >  {/* CHANGE THE URL */}

                    <div className="card_img__add_card" >
                        <img src={imgSrc} alt="img" />
                    </div>
                    <div className="card_title__add_card">pridať {titleText} </div>

                </div>
                {/* </Link> */}
            </Col>
        )
    }
}

export default withRouter(AddCard);