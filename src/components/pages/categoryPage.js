import React, {Component} from "react";
import { Container, Row } from "react-bootstrap";

import GalleryBackground from "../top_background/topBackground"
import TopHeaders from "../top_headers/topHeaders"
import GalleryService from "../services/galery_service"
import {AddCard, CategoryImageCard} from '../cards'


export default class CategoryPage extends Component {
    galleryService = new GalleryService();

    state = {
        images: null,  // Arr of Objcts
        firstImgUrl: ''
    }

    componentDidMount() {
        //console.log("CategoryPage Comp,  componentDidMount().....");

        // state.images setState
        const {categPath} = this.props;

        this.galleryService.getCategoryImages(categPath)
            .then( (allImages) => {
                this.setState({images: allImages.images})
                console.log(`CategPage -> ImagesArr:`);
                console.log(this.state.images);
            })
            .then( () => {
                // 1-st Img Url setState
                this.setFirstImgUrlToState();   
            })
        //
    }

    setFirstImgUrlToState = () => {
        const {fullpath} = this.state.images[0];
        this.setState({ firstImgUrl: `http://api.programator.sk/images/1000x600/${fullpath}` })
    }
    onCardHover = (hoveredImgUrl) => {
        this.setState({ firstImgUrl: hoveredImgUrl })
    }
    onCardLeave = () => {
        this.setFirstImgUrlToState();
    }

    dynamImagesRender = (imagesArr) => {  // Arr  of  Objcts
        return imagesArr.map((image, idx) => {
            const {path, fullpath} = image;
            
            return < CategoryImageCard imgPath={path} fullImgPath={fullpath} onCardHover={this.onCardHover} onCardLeave={this.onCardLeave} key={idx}/>
        })
    }


    render() {
        //console.log('CategoryPage  render() .....');

        const {images, firstImgUrl} = this.state;
        if (!images) {  return <span> Loading !!! </span>  }

        const categoryImageCards = this.dynamImagesRender(images);

        return (
            <section className="section">
                <Container>
            
                    {/* <!--  BLURED TOP BackGround  --> */}
                    < GalleryBackground imgUrl={firstImgUrl} /> 
                
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