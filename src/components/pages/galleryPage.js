import React, {Component} from "react";
import { Container, Row } from "react-bootstrap";

import GalleryBackground from "../top_background/topBackground"
import TopHeaders from "../top_headers/topHeaders";
import GalleryService from "../services/galery_service";
import {AddCard, GaleryCategoryCard} from '../cards'


export default class GalleryPage extends Component {

    galleryService = new GalleryService();

    state = {
        galleries: null,
        firstImgUrl: ''
    }

    componentDidMount() {

        this.galleryService.getAllGalleries()
            .then( (allGaleries) => {
                this.setState({galleries: allGaleries.galleries})
                //console.log(this.state.galleries);
            })
            .then( () => {
                // 1-st Img Url setState 
                this.setFirstImgUrlToState();
            })
        //
    }

    dynamGaleriesRender = (galeriesArr) => {  // Arr  of  Objcts
        return galeriesArr.map((gallery, idx) => {
            const {name, path} = gallery;

            // UNDEFINED FULLPATH (fullpath) param Handling
            const { fullpath } = (typeof gallery.image !== 'undefined' && gallery.image) || {}

            return < GaleryCategoryCard name={name} path={path} onCardHover={this.onCardHover} onCardLeave={this.onCardLeave} imgPath={fullpath} key={idx} />
        })
    }

    setFirstImgUrlToState = () => {
        const firstGalleriesObj = this.state.galleries[0];
        const {name} = firstGalleriesObj;
        // !!!!! NEED UNDEFINED HANDLE !!!!!
        const {path} = (typeof firstGalleriesObj.image !== 'undefined' && firstGalleriesObj.image) || {}

        if (typeof(path) !== 'undefined') { 
            this.setState({ firstImgUrl: `http://api.programator.sk/images/1000x600/${name}/${path}` });
        } else { this.setState({ firstImgUrl: undefined }); }
    }
    onCardHover = (hoveredImgUrl) => {
        this.setState({ firstImgUrl: hoveredImgUrl })
    }
    onCardLeave = () => {
        this.setFirstImgUrlToState();
    }


    render() {

        const {galleries, firstImgUrl} = this.state;
        if (!galleries) {  return <span> Loading !!! </span>  }

        const galleryCards = this.dynamGaleriesRender(galleries);

        return (
            <section className="section">
                    <Container>

                        {/* <!--  BLURED TOP BackGround  --> */}
                        < GalleryBackground imgUrl={firstImgUrl} />
                    
                        <Container>
                            <Row>
                                
                                {/* <!--  H1, H2 & Divider  --> */}
                                < TopHeaders subHeaderTxt='kategórie' />
                                
                                {/* <!--  CARDS  --> */}
                                {galleryCards}
                                
                                {/* <!-- ADD NEW CATEGORY  CARD  --> */}
                                < AddCard addCategory={true}/>

                            </Row> 
                        </Container> 
                        
                
                    </Container> 
                </section>
        )
    }
}