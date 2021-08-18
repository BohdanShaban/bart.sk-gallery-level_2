import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

import ModalTopCloseBtn from '../common_comps/modalTopCloseBtn.js'
import ModalBottomAddBtn from '../common_comps/modalBottomAddBtn.js'
import GalleryService from "../../services/galery_service"; 


import './addCategModal.sass';
import '../common_comps/modals_common_elms.sass'

export class AddCategModal extends Component {

    state = { inputTxt: '', isOpen: false }
    
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }


    onSubmit = (e) => {
        e.preventDefault();
        const galleryService = new GalleryService();
        const postObj = { name: this.state.inputTxt }

        galleryService.postNewGallery(postObj)
            .then ( myJson => console.log('SUCCESS POST RESULT: ', myJson) )
            .catch((err) => console.log(err))
        this.setState({ inputTxt: '' }); // IMMUTABLE !!!
        // Close Modal & Page reload
        document.getElementById('modal_close').click();
        window.location.reload();
    }

    onValueChange = (e) => {
        this.setState({ inputTxt: e.target.value }); // IMMUTABLE !!! 
        console.log( `AddCategModal Comp, onValueChange(), inputTxt: ${this.state.inputTxt}`);
    }
    removeLastUrlPrt = e => {
        e.stopPropagation();

        const target = e.target;
        if (target.id !== 'modal__mask') {
            return ; // child was clicked, ignore onClick
        }

        let {url} = this.props.match;
        url = url.slice(0, url.lastIndexOf('/'));
        this.props.history.push(url + '/');
    }; 

    render() {

        return (

            <div className="modal__mask" id='modal__mask'  onClick={ this.removeLastUrlPrt }  >
                <div className="modal__dialog">
                    < ModalTopCloseBtn />

                    <div className="modal_content">
                        <h2 className="modal_content__header">pridať kategóriu</h2>

                        <form className="add_category_wrapper"
                                onSubmit={this.onSubmit}
                        > 
                            <input className="input_categ_add" name="input-categ" type="text" id="categ_add" placeholder="Zadajte názov kategórie"
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