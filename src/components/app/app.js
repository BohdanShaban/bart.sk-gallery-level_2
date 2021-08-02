import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";

import GalleryBackground from "../gallery_background/galleryBackground";
import GaleryHeader from "../gallery_header/galeryHeader";
import AppGaleryCard from "../app_galery_card/appGaleryCard";
import AppAddGaleryCard from "../app_add_galery_card/appAddGaleryCard";


import './app.sass';
export default class App extends Component {



    render() {

        return (

            // <!------------      MAIN SECTION      ------------>

            <div>

                <section className="section" >   {/* style="display: block" */}
                    <Container>
                
                        < GalleryBackground />
                    
                        <div className="galery_wrapper "> 
                            <Container>
                                <Row>
                                    
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
                        </div> {/* <!--  galery_wrapper  --> */}
                
                    </Container> {/* <!--  .container  --> */}
                </section>

            </div>
        )
    }
}