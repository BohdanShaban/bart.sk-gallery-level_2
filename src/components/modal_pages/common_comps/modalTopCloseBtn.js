import React, {Component}  from "react";
import {withRouter} from 'react-router-dom';

import closeImg from './close.png'

import './modals_common_elms.sass'

export class ModalTopCloseBtn extends Component {

    urlBack = e => {
        e.stopPropagation();
        this.props.history.goBack();
    };


    render() {
        return (
            <div className="close_btn_wrapper">
                <button className="close_btn" onClick={ this.urlBack }>

                    <img src={closeImg} alt="Close"/>
                    <div className="btn_text">ZAVRIET</div>
                </button>
            </div>
        )
    }
}

export default withRouter(ModalTopCloseBtn);