import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

import ModalTopCloseBtn from '../common_comps/modalTopCloseBtn.js'
import ModalBottomAddBtn from '../common_comps/modalBottomAddBtn.js'
import GalleryService from "../../services/galery_service"; 

import './addPhotoModal.sass';
import '../common_comps/modals_common_elms.sass'
import srcImage from './add_photo.png'

export class AddPhotoModal extends Component {

    state = { selectedFiles: [] }

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }
    preventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }


    inputFileChanged = (e) => {
        // PLACE FILES TO state —> Will Have Arr of Files
        const file = e.target.files[0];
        this.setState({ selectedFiles: [...this.state.selectedFiles, file] })
    }
    postFiles = (arrOfFiles) => {  // Was on input Tag onChange param !!!!!
        arrOfFiles.forEach(file => {

            // Create & Append FormData Obj 
            const postFordDataObj = new FormData();
            const fileName = file.name;
            const imgName = file.name.split('.')[0];
            postFordDataObj.append(
                imgName,
                file,
                fileName
            )
            // POST Each Photo 1 by 1 With Service
            const galleryService = new GalleryService();
            const categUrlStr = this.props.match.params[0];
            galleryService.postNewImgToCategory( categUrlStr, postFordDataObj )
                .then ( myJson => console.log('SUCCESS POST REQ ( PHOTO POST ) RESULT: ', myJson) )
                .catch(() => { /* Error. Inform the user */ })
            this.setState({ selectedFiles: [] }); // IMMUTABLE !!! —> State Clear

        }) 
    }
    onSubmit = (e) => {
        this.preventDefaults(e);
        this.postFiles(this.state.selectedFiles);
    }

    onDragOver = (e) => {
        this.preventDefaults(e);
        document.getElementById('drop-area').classList.add('highlight');

        console.log("onDragOver Event !!!!");
    }
    onDragLeave = (e) => {
        this.preventDefaults(e);
        document.getElementById('drop-area').classList.remove('highlight');

        console.log("onDragLeave Event !!!!");
    }
    onDrop = (e) => {
        this.preventDefaults(e);
        document.getElementById('drop-area').classList.remove('highlight');

        // GET Files That Where Dropped
        let dt = e.dataTransfer;
        let files = dt.files;

        // PLACE FILES TO state —> Will Have Arr of Files
        this.setState({ selectedFiles: [...this.state.selectedFiles, ...files ] });
    }


    render() {
        return (
            <>
                <div className="modal__mask"  onClick={ () => this.props.history.goBack() }> 

                    <div className="modal__dialog">

                        < ModalTopCloseBtn />

                        <div className="modal_content">

                            <h2 className="modal_content__header">Pridať fotky</h2>

                            <div id="drop-area" onDrop={this.onDrop} onDragOver={ this.onDragOver } onDragLeave={this.onDragLeave}>

                                <form className="photo_drag_and_drop" onSubmit={this.onSubmit}  method="post" action="" encType="multipart/form-data" >

                                    <div className="box__input">
                                        <div className="card_img__add_card" > <img src={srcImage} className="add_photo_img" alt="img" /> </div>

                                        <input className="box__file" type="file" onChange={this.inputFileChanged} name="files[]" id="file" accept="image/*" data-multiple-caption="{count} files selected" multiple />
                                        <label className="label" htmlFor="file"> 
                                            <div className="label_wrapper">
                                                <div className="card_title__add_card ">sem presunte fotky</div>
                                                <div className="grop_or">alebo</div>
                                                <div className="card_title__add_card files_choose_text" >VYBERTE súbory</div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="add_photo_wrapper">  < ModalBottomAddBtn />  </div>
                                </form>
                            </div>

                            
                            
                        </div> {/* <!-- modal_content --> */}
                    </div> {/* <!-- modal__dialog --> */}
                </div>
            </>
        )
    }
}

export default withRouter(AddPhotoModal);