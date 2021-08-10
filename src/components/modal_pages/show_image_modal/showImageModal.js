import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

import ModalTopCloseBtn from '../common_comps/modalTopCloseBtn.js'


import './showImageModal.sass';
import '../common_comps/modals_common_elms.sass'

import leftArrowImg from './left-arrow.png'
import rightArrowImg from './right-arrow.png'



export class ShowImageModal extends Component {


    render() {

        const {url} = this.props.match;

        return (
            <div className="modal__mask  popup__add_categ" 
                 onClick={ () => this.props.history.goBack() }> {/* <!--  !!! display: flex  --> */}

                <div className="modal__dialog">


                    <div className="modal_image_content">

                        <div className="backside_transparent_wrapper">
                            <button type="button" data-prev>
                                <img src={leftArrowImg} alt="Left" />
                            </button>
                        </div>

                        <div className="modal_image">

                            < ModalTopCloseBtn />
                            <img className="modal_image_img" src={ `http://api.programator.sk/images/600x450/${url}` } alt="modal_image" />
                        </div>

                        <div className="backside_transparent_wrapper">
                            <button type="button" data-next>
                                <img src={rightArrowImg} alt="Right" />
                            </button>
                        </div>
                        
                    </div> {/* <!-- modal_content --> */}
                </div> {/* <!-- modal__dialog --> */}
            </div>
        )
    }
}

export default withRouter(ShowImageModal);