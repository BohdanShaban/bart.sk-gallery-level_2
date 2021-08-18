import React, {Component}  from "react";
import {withRouter} from 'react-router-dom';

import closeImg from './close.png'

import './modals_common_elms.sass'

export class ModalTopCloseBtn extends Component {

    removeLastUrlPrt = e => {
        e.stopPropagation();

        let {url} = this.props.match;
        url = url.slice(0, url.lastIndexOf('/'));
        this.props.history.push(url + '/');
    };

    

    render() {
        return (
            <div className="close_btn_wrapper">
                <button className="close_btn" onClick={ this.removeLastUrlPrt }>

                    <img src={closeImg} alt="Close"/>
                    <div className="btn_text">zavrieť</div>
                </button>
            </div>
        )
    }
}

export default withRouter(ModalTopCloseBtn);