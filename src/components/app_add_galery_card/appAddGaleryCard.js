import React, {Component} from "react";



import './appAddGaleryCard.sass';


export default class AppAddGaleryCard extends Component {


    render() {

        return (

            // <!-- ADD NEW CATEGORY  CARD  -->

            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="category_item__add_categ">

                    <a className="categ_img__add_categ" href="#">
                        <img src="./icons/add_category.png" alt="img" />
                    </a>
                    <div className="categ_title__add_categ">pridat kategoriu</div>

                </div>
            </div>
        )
    }
}