import React, {Component} from "react";
import { Col } from "react-bootstrap"; 
import {withRouter, Link, useLocation, useRouteMatch} from 'react-router-dom';


import '../cards.sass';


const CategoryImageCard = ({imgPath, fullImgPath}) => {

    let location = useLocation();
    let {url} = useRouteMatch();

    return (

        <Col lg={3} md={4} sm={6} > 

            <Link to={{ 
                pathname:`${url}${imgPath}`,
                state: { background: location }  // !!!!! BY CLICKING WE ARE SETTING  background  Param Here
                }}  style={{ textDecoration: 'none' }}
            > 
                <div className="card_item" > {/* Border Radius !!! */}

                    <div className="card_img">
                        <img src={ `http://api.programator.sk/images/400x300/${fullImgPath}` } alt={imgPath} />
                    </div>
                </div>
            </Link> 

        </Col>
    )
}

export default CategoryImageCard; //withRouter(CategoryImageCard);