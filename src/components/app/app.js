import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container, Row } from "react-bootstrap";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import GalleryService from "../services/galery_service";
import GalleryPage from '../gallery_page'
import CategoryPage from '../category_page'


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

    dynamRoutesRender = (galeriesArr) => {  // Arr  of  Objcts
        return galeriesArr.map((gallery) => {
            const {path, name} = gallery; 

            return (
                <Route path={`/${path}`} >
                    <CategoryPage categPath={path} categName={name}/>
                </Route>
            )
        })
    }


    render() {

        const {galleries} = this.state;

        if (!galleries) {  return <span> Loading !!! </span>  }

        const categoryRoutes = this.dynamRoutesRender(galleries);

        return (
            < Router >

                < Route exact path='/' component={GalleryPage}/>

                { categoryRoutes }
                {/* < Route path='/cart' component={}/> */}
                
            </Router>
        )
    }
}