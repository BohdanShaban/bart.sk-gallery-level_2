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

    state = {
        galleries: null
    }


    componentDidMount() {

        const galleryService = new GalleryService();

        galleryService.getAllGalleries()
            .then( (allGaleries) => {
                this.setState({galleries: allGaleries.galleries})
                console.log(this.state);
            })
    }


    render() {

        return (

            // <!------------      MAIN SECTION      ------------>

            <section className="section">   {/* style="display: block" */}
                <Container>
            
                    {/* <!--  BLURED TOP BackGround  --> */}
                    < GalleryBackground />
                
                    <Container>
                        <Row>
                            
                            {/* <!--  H1, H2 & Divider  --> */}
                            < GaleryHeader />
                            
                            {/* <!--  CARDS  --> */}
                            

                            < AppGaleryCard />
                            < AppGaleryCard />
                            < AppGaleryCard />
                            < AppGaleryCard />
                            
                            < AppGaleryCard />
                            < AppGaleryCard />
                            

        
                            {/* <!-- ADD NEW CATEGORY  CARD  --> */}
                            < AppAddGaleryCard />

                            
            
                        </Row> {/* <!--  row  --> */}
                    </Container> {/* <!--  container  --> */}
                    
            
                </Container> {/* <!--  .container  --> */}
            </section>
        )
    }
}