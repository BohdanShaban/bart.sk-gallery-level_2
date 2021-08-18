import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

import ModalTopCloseBtn from '../common_comps/modalTopCloseBtn.js'
import GalleryService from "../../services/galery_service"

import './showImageModal.sass';
import '../common_comps/modals_common_elms.sass'

import leftArrowImg from './left-arrow.png'
import rightArrowImg from './right-arrow.png'


export class ShowImageModal extends Component {
    galleryService = new GalleryService();
    state = { images: null } 

    componentDidMount() {
        document.body.style.overflow = 'hidden';

        // state.images setState
        const {url} = this.props.match;
        const categPath = url.split('/')[1];
        this.getImagesFromBackend(categPath);
    }
    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }

    getImagesFromBackend = (categPath) => {
        this.galleryService.getCategoryImages(categPath)
            .then( (allImages) => {
                this.setState({images: allImages.images})
                console.log(`ShowImageModal -> ImagesArr:`);
                console.log(this.state.images);
            })
        //
    }

    preventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    nextImgUrlChange = (e) => {
        this.preventDefaults(e);
        const {url} = this.props.match;
        const {images} = this.state;

        images.forEach( (image, idx) => {
            if( '/' + image.fullpath === url) {

                // BOUNDARIES —> Last Img Become First & First Bec Last
                // if( idx > slidesArr.length) { slideIdx = 1 }  &&  if( idx < 1) { slideIdx = slidesArr.length }

                if( idx > images.length - 2 ) { // IF It's LAST Img
                    idx = 0;  // Change Idx on FIRST One
                    const {path} = images[idx];
                    // Change Url
                    this.props.history.push(path);
                } else {
                    const {path} = images[++idx];
                    this.props.history.push(path);
                }
            }
        })
    }

    prevImgUrlChange = (e) => {
        this.preventDefaults(e);
        const {url} = this.props.match;
        const {images} = this.state;

        images.forEach( (image, idx) => {
            if( '/' + image.fullpath === url) {

                // BOUNDARIES —> Last Img Become First & First Bec Last
                // if( idx > slidesArr.length) { slideIdx = 1 }  &&  if( idx < 1) { slideIdx = slidesArr.length }

                if( idx < 1) { // IF It's FIRST Img
                    // Change Idx on Last One
                    idx = images.length - 1;
                    const {path} = images[idx];
                    // Change Url
                    this.props.history.push(path);
                } else {
                    const {path} = images[--idx];
                    this.props.history.push(path);
                }
            }
        })
    }


    render() {
        //console.log('ShowImageModal  RENDER RENDER () .....')

        const {url} = this.props.match;
        const currImgUrl = `http://api.programator.sk/images/600x450/${url}`;

        return (
            <div className="modal__mask  popup__add_categ" 
                   > {/* <!--  !!! onClick={ () => this.props.history.goBack() }  --> */}

                <div className="modal__dialog">


                    <div className="modal_image_content">

                        <div className="backside_transparent_wrapper">
                            <button type="button" data-prev onClick={this.prevImgUrlChange} >
                                <img src={leftArrowImg} alt="Left" />
                            </button>
                        </div>

                        <div className="modal_image">
                            < ModalTopCloseBtn />
                            <img className="modal_image_img" src={ currImgUrl } alt="modal_image__ID" />
                        </div>

                        <div className="backside_transparent_wrapper">
                            <button type="button" data-next onClick={this.nextImgUrlChange}>
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