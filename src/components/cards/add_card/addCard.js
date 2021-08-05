import React from "react";
import { Col } from "react-bootstrap";
import {Link} from 'react-router-dom';

import addCategImg from './add_category.png'
import addPhotoImg from './add_photo.png'


import '../cards.sass';

// <!-- ADD NEW CATEGORY/PHOTO  CARD  -->

const AddCard = ({addCategory}) => {

    const imgSrc = addCategory ? addCategImg : addPhotoImg;
    const titleText = addCategory ? 'kategoriu' : 'fotky';
    const linkTo = addCategory ? '/add_categ' : '/add_photo';

    return (

        <Col lg={3} md={4} sm={6}>
            <Link to={linkTo}  style={{ textDecoration: 'none' }}> 
                <div className="card_item__add_card">

                    <div className="card_img__add_card" >
                        <img src={imgSrc} alt="img" />
                    </div>
                    <div className="card_title__add_card">pridat {titleText} </div>

                </div>
            </Link>
        </Col>
    )
}

export default AddCard;