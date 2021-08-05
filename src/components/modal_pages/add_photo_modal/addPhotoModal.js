import React, {Component} from "react";
import {Link} from 'react-router-dom';

import ModalTopCloseBtn from '../common_comps/modalTopCloseBtn.js'
import ModalBottomAddBtn from '../common_comps/modalBottomAddBtn.js'


import './addPhotoModal.sass';
import '../common_comps/modals_common_elms.sass'
import srcImage from './add_photo.png'


export default class AddPhotoModal extends Component {

    // SHOULD KNOW THE CURRENT CATEG NAME


    render() {

        return (
            <Link to='/' style={{ textDecoration: 'none' }} > 
                <div className="modal__mask  popup__add_categ" > {/* <!--  !!! display: flex  --> */}
                    <div className="modal__dialog">

                        < ModalTopCloseBtn />

                        <div className="modal_content">

                            <h2 className="modal_content__header">Pridat fotku</h2>

                            <div className="photo_drag_and_drop">

                                <a className="card_img__add_card" href="/">
                                    <img src={srcImage} alt="img" />
                                </a>
                                <div className="card_title__add_card">sem presunte fotky</div>
                                <div className="grop_or">alebo</div>
                                <button className="btn_choose_files" type="button" data-add>
                                    <div className="card_title__add_card" style={{ margin: '0' }}>VYBERTE SUBORY</div>
                                </button>

                            </div>

                            <div className="add_photo_wrapper">
                                < ModalBottomAddBtn />
                            </div>
                            
                        </div> {/* <!-- modal_content --> */}
                    </div> {/* <!-- modal__dialog --> */}
                </div>
            </Link> 
        )
    }
}