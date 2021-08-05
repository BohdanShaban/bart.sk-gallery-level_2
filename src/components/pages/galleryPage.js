import React, {Component} from "react";
import { Container, Row } from "react-bootstrap";

import TopBackground from "../top_background/topBackground";
import TopHeaders from "../top_headers/topHeaders";
import GalleryService from "../services/galery_service";
import {AddCard, GaleryCategoryCard} from '../cards'


export default class GalleryPage extends Component {

    galleryService = new GalleryService();

    state = {
        galleries: null
    }

    componentDidMount() {

        this.galleryService.getAllGalleries()
            .then( (allGaleries) => {
                this.setState({galleries: allGaleries.galleries})
                //console.log(this.state.galleries);
            })
    }

    dynamGaleriesRender = (galeriesArr) => {  // Arr  of  Objcts
        return galeriesArr.map((gallery, idx) => {
            const {name, path} = gallery;

            // UNDEFINED FULLPATH (fullpath) param Handling
            const { fullpath } = (typeof gallery.image !== 'undefined' && gallery.image) || {}
            //console.log(`fullpath: ${fullpath}`);
            //if (typeof(fullpath) == 'undefined') { console.log('UNDEF !!!!!!!!!!!!');  }

            // const label = this.props.renderItem(gallery); // Render f() Pattern

            return < GaleryCategoryCard name={name} path={path} imgPath={fullpath} key={idx} />
        })
    }


    render() {

        const {galleries} = this.state;
        if (!galleries) {  return <span> Loading !!! </span>  }

        const galleryCards = this.dynamGaleriesRender(galleries);

        return (
            <section className="section">
                    <Container>

                        {/* <!--  BLURED TOP BackGround  --> */}
                        < TopBackground />
                    
                        <Container>
                            <Row>
                                
                                {/* <!--  H1, H2 & Divider  --> */}
                                < TopHeaders subHeaderTxt='kategorie' />
                                
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