import React, {Component} from "react";
import { Container, Row } from "react-bootstrap";

import GalleryBackground from "../top_background/topBackground";
import GaleryHeader from "../top_headers/topHeaders";
import GalleryService from "../services/galery_service";
import CategoryImageCard from "./category_image_card"

import './categoryPage.sass';


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
        return imagesArr.map((image) => {
            const {name, fullpath} = image;

            // UNDEFINED FULLPATH (fullpath) param Handling
            //const { fullpath } = (typeof image.image !== 'undefined' && image.image) || {}
            //console.log(`fullpath: ${fullpath}`);
            //if (typeof(fullpath) == 'undefined') { console.log('UNDEF !!!!!!!!!!!!');  }

            // const label = this.props.renderItem(gallery); // Render f() Pattern

            return < CategoryImageCard name={name}  imgPath={fullpath} />
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
                            < GaleryHeader subHeaderTxt={this.props.categName} />
                            
                            {/* <!--  IMAGES  --> */}
                            {/* < CategoryImageCard />
                            < CategoryImageCard />
                            < CategoryImageCard />
                            < CategoryImageCard />
                            < CategoryImageCard />
                            < CategoryImageCard />
                            < CategoryImageCard /> */}

                            { categoryImageCards }
                            
                            
                            {/* <!-- ADD NEW IMAGE  CARD  --> */}


                        </Row> 
                    </Container> 
                    
            
                </Container> 
            </section>
        )
    }
}