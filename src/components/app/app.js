import React, {Component} from "react";

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
                    <div className="container">
                
                        < GalleryBackground />
                    
                        <div className="galery_wrapper "> 
                            <div className="container">
                                <div className="row">
                                    
                                    < GaleryHeader />
                                    
                                    {/* <!--  CARDS  --> */}

                                    {/* < AppGaleryCard /> */}

                
                                    {/* <!-- ADD NEW CATEGORY  CARD  --> */}
                                    
                                    {/* < AppAddGaleryCard /> */}

                                    
                    
                                </div> {/* <!--  row  --> */}
                            </div> {/* <!--  container  --> */}
                        </div> {/* <!--  galery_wrapper  --> */}
                
                    </div> {/* <!--  .container  --> */}
                </section>

            </div>
        )
    }
}