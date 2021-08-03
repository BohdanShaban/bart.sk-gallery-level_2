import React, {Component} from "react";
import { Container, Row } from "react-bootstrap";

import GalleryBackground from "../gallery_background/galleryBackground";
import GaleryHeader from "../gallery_header/galeryHeader";
import GalleryService from "../services/galery_service";
import GalleryImageCard from "./gallery_image_card"

import './gallery.sass';


export default class Gallery extends Component {
    galleryService = new GalleryService();

    state = {
        images: null,
        galleryName: "architektura"
    }

    componentDidMount() {

        this.galleryService.getCertainGallery('url_path')
            .then( (allGaleries) => {
                this.setState({galleries: allGaleries.galleries})
                console.log(this.state.images);
            })
    }


    render() {

        return (
            <section className="section">
                <Container>
            
                    {/* <!--  BLURED TOP BackGround  --> */}
                    < GalleryBackground />
                
                    <Container>
                        <Row>
                            
                            {/* <!--  H1, H2 & Divider  --> */}
                            < GaleryHeader subHeaderTxt={this.state.galleryName} />
                            
                            {/* <!--  IMAGES  --> */}
                            < GalleryImageCard />
                            < GalleryImageCard />
                            < GalleryImageCard />
                            < GalleryImageCard />
                            < GalleryImageCard />
                            < GalleryImageCard />
                            < GalleryImageCard />


                            
                            
                            {/* <!-- ADD NEW IMAGE  CARD  --> */}


                        </Row> 
                    </Container> 
                    
            
                </Container> 
            </section>
        )
    }
}