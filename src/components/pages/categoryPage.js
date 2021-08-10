import React, {Component} from "react";
import { Container, Row } from "react-bootstrap";

import GalleryBackground from "../top_background/topBackground"
import TopHeaders from "../top_headers/topHeaders"
import GalleryService from "../services/galery_service"
import {AddCard, CategoryImageCard} from '../cards'


export default class CategoryPage extends Component {
    galleryService = new GalleryService();

    state = {
        images: null
    }

    componentDidMount() {
        const {categPath} = this.props;

        this.galleryService.getCategoryImages(categPath)
            .then( (allImages) => {
                this.setState({images: allImages.images})
                console.log(this.state.images);
            })
    }

    dynamImagesRender = (imagesArr) => {  // Arr  of  Objcts
        return imagesArr.map((image, idx) => {
            const {path, fullpath} = image;
            
            return < CategoryImageCard imgPath={path}  fullImgPath={fullpath} key={idx}/>
        })
    }


    render() {

        const {images} = this.state;
        if (!images) {  return <span> Loading !!! </span>  }

        const categoryImageCards = this.dynamImagesRender(images);

        return (
            <section className="section">
                <Container>
            
                    {/* <!--  BLURED TOP BackGround  --> */}
                    < GalleryBackground />
                
                    <Container>
                        <Row>
                            
                            {/* <!--  H1, H2 & Divider  --> */}
                            < TopHeaders subHeaderTxt={this.props.categName} withBackBtn={true} />
                            
                            {/* <!--  IMAGES  --> */}
                            { categoryImageCards }
                            
                            
                            {/* <!-- ADD NEW IMAGE  CARD  --> */}
                            < AddCard addCategory={false} />

                        </Row> 
                    </Container> 
                    
            
                </Container> 
            </section>
        )
    }
}