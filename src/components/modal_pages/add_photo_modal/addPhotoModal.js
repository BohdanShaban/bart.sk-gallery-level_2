import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

import ModalTopCloseBtn from '../common_comps/modalTopCloseBtn.js'
import ModalBottomAddBtn from '../common_comps/modalBottomAddBtn.js'
import GalleryService from "../../services/galery_service"; 


import './addPhotoModal.sass';
import '../common_comps/modals_common_elms.sass'
import srcImage from './add_photo.png'
// <div className="card_title__add_card" style={{ margin: '0' }}>VYBERTE SUBORY</div>

export class AddPhotoModal extends Component {

    state = { selectedFile: null }

    inputFileChanged = (e) => {
        const file = e.target.files[0];
        this.setState({ selectedFile: file })
        
        console.log("File Changed !!!!!!!");
        console.log(this.state.selectedFile);
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("File Submit !!!!!!!");
        console.log(this.state.selectedFile);

        const galleryService = new GalleryService();
        const postFordDataObj = new FormData();
        const fileName = this.state.selectedFile.name;
        const imgName = this.state.selectedFile.name.split('.')[0];
        postFordDataObj.append(
            imgName,
            this.state.selectedFile,
            fileName
        )

        const categUrlStr = this.props.match.params[0];
        console.dir(postFordDataObj)

        galleryService.postNewImgToCategory( categUrlStr, postFordDataObj )
            .then ( myJson => console.log('SUCCESS POST RESULT: ', myJson) )
        
        this.setState({ selectedFile: null }); // IMMUTABLE !!!
    }

    render() {

        return (
            <div className="modal__mask  popup__add_categ" 
                  > {/* <!--  !!! onClick={ () =>  this.props.history.goBack() }   --> */}

                <div className="modal__dialog">

                    < ModalTopCloseBtn />

                    <div className="modal_content">

                        <h2 className="modal_content__header">Pridat fotku</h2>

                        <form className="photo_drag_and_drop" onSubmit={this.onSubmit}  method="post" action="" encType="multipart/form-data" >

                            <div className="box__input">
                                <div className="card_img__add_card" > <img src={srcImage} className="add_photo_img" alt="img" /> </div>

                                <input className="box__file" type="file" onChange={this.inputFileChanged} name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                                <label className="label" htmlFor="file"> 
                                    <div className="label_wrapper">
                                        <div className="card_title__add_card ">sem presunte fotky</div>
                                        <div className="grop_or">alebo</div>
                                        <div className="card_title__add_card files_choose_text" >VYBERTE SUBORY</div>
                                    </div>
                                </label>
                            </div>

                            <div className="add_photo_wrapper">  < ModalBottomAddBtn />  </div>
                        </form>

                        
                        
                    </div> {/* <!-- modal_content --> */}
                </div> {/* <!-- modal__dialog --> */}
            </div>
        )
    }
}

export default withRouter(AddPhotoModal);