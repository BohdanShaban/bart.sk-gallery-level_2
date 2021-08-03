import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";

import GalleryBackground from "../gallery_background/galleryBackground";
import GaleryHeader from "../gallery_header/galeryHeader";
import AppGaleryCard from "../app_galery_card/appGaleryCard";
import AppAddGaleryCard from "../app_add_galery_card/appAddGaleryCard";
import GalleryService from "../services/galery_service";


import './app.sass';
export default class App extends Component {
    galleryService = new GalleryService();

    state = {
        galleries: null
    }


    componentDidMount() {

        this.galleryService.getAllGalleries()
            .then( (allGaleries) => {
                this.setState({galleries: allGaleries.galleries})
                console.log(this.state.galleries);
            })
    }

    renderItems = (galeriesArr) => {  // Arr  of  Objcts

        return galeriesArr.map((gallery) => {
            
            const {name, path} = gallery;

            // UNDEFINED FULLPATH (fullpath) param Handling
            const { fullpath } = (typeof gallery.image !== 'undefined' && gallery.image) || {}
            //console.log(`fullpath: ${fullpath}`);
            //if (typeof(fullpath) == 'undefined') { console.log('UNDEF !!!!!!!!!!!!');  }


            // const label = this.props.renderItem(gallery); // Render f() Pattern

            return (
                // DYNAMICLY FORM ROUTE !!!
                < AppGaleryCard name={name} path={path} imgFullPath={fullpath} /> //imgPath={fullpath}
            )
        })
    }


    render() {

        const {galleries} = this.state;

        if (!galleries) {
            return <span> Loading !!! </span>
        }

        const galleryCards = this.renderItems(galleries);

        return (
            <section className="section">
                <Container>
            
                    {/* <!--  BLURED TOP BackGround  --> */}
                    < GalleryBackground />
                
                    <Container>
                        <Row>
                            
                            {/* <!--  H1, H2 & Divider  --> */}
                            < GaleryHeader subHeaderTxt='kategorie' />
                            
                            {/* <!--  CARDS  --> */}
                            {galleryCards}
                            
                            {/* <!-- ADD NEW CATEGORY  CARD  --> */}
                            < AppAddGaleryCard />

                        </Row> 
                    </Container> 
                    
            
                </Container> 
            </section>
        )
    }
}