import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

import ModalTopCloseBtn from '../common_comps/modalTopCloseBtn.js'
import ModalBottomAddBtn from '../common_comps/modalBottomAddBtn.js'
import GalleryService from "../../services/galery_service"; 


import './addCategModal.sass';
import '../common_comps/modals_common_elms.sass'

export class AddCategModal extends Component {

    state = {
        inputTxt: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        const galleryService = new GalleryService();
        const postObj = { name: this.state.inputTxt }

        galleryService.postNewGallery(postObj)
            .then ( myJson => console.log('SUCCESS POST RESULT: ', myJson) )

        this.setState({ inputTxt: '' }); // IMMUTABLE !!!
    }

    onValueChange = (e) => {
        this.setState({ inputTxt: e.target.value }); // IMMUTABLE !!! 
        console.log( `AddCategModal Comp, onValueChange(), inputTxt: ${this.state.inputTxt}`);
    }

    urlGoBack = (e) => {
        e.stopPropagation();
        this.props.history.goBack();
    }   

    render() {

        return (

            <div  className="modal__mask "    >  {/* onClick={ this.urlGoBack } */}

                <div className="modal__dialog">
                    < ModalTopCloseBtn />

                    <div className="modal_content">
                        <h2 className="modal_content__header">Pridat kategoriu</h2>

                        <form className="add_category_wrapper"
                                onSubmit={this.onSubmit}
                        > 
                            <input className="input_categ_add" name="input-categ" type="text" id="categ_add" placeholder="Zadajte nazov kategorie"
                                    onChange={this.onValueChange}  value={this.state.inputTxt}
                            />
                            < ModalBottomAddBtn />
                        </form>
                    </div> {/* <!-- modal_content --> */}
                </div> {/* <!-- modal__dialog --> */}
            </div>
        )
    }
}

export default withRouter(AddCategModal);