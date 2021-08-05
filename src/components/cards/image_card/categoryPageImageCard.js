import React, {Component} from "react";
import { Col } from "react-bootstrap"; 



import '../cards.sass';


export default class CategoryImageCard extends Component {
    


    render() {

        const {name, imgPath} = this.props;

        return (

            <Col lg={3} md={4} sm={6} >

                <div className="card_item"   >  {/* style={{borderBottomLeftRadius: '2%'}} */}
                    <div className="card_img">
                        <img src={ `http://api.programator.sk/images/400x300/${imgPath}` } alt={name} />
                    </div>
                </div>

            </Col>
        )
    }
}