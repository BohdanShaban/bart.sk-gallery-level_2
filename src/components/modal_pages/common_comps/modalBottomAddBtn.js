import React from "react";

import addImg from './add.png'

import './modals_common_elms.sass'

const ModalBottomAddBtn = () => {

    return (
        <button className="modal_add_btn" type="submit" data-add>
            <img src={addImg} alt="Add" />
            <div className="btn_text">pridať</div>
        </button>
    )
}

export default ModalBottomAddBtn;