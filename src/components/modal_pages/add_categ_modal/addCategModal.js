import React, {Component} from "react";
import {Link} from 'react-router-dom';

import ModalTopCloseBtn from '../common_comps/modalTopCloseBtn.js'
import ModalBottomAddBtn from '../common_comps/modalBottomAddBtn.js'


import './addCategModal.sass';
import '../common_comps/modals_common_elms.sass'


export default class AddCategModal extends Component {


    render() {

        return (

            <Link to= '/' style={{ textDecoration: 'none' }} > 
                <div className="modal__mask " > {/* <!--  !!! display: flex  --> */}
                    <div class="modal__dialog">

                        < ModalTopCloseBtn />

                        <div className="modal_content">

                            <h2 className="modal_content__header">Pridat kategoriu</h2>

                            <div className="add_category_wrapper">
                                <input className="input_categ_add" name="input-categ" type="text" id="categ_add" placeholder="Zadajte nazov kategorie"/>
                                < ModalBottomAddBtn />
                            </div>
                            
                        </div> {/* <!-- modal_content --> */}
                    </div> {/* <!-- modal__dialog --> */}
                </div>
            </Link> 
        )
    }
}