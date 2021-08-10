import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container, Row } from "react-bootstrap";
import { Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import GalleryService from "../services/galery_service"; 
import {GalleryPage, CategoryPage} from '../pages'
import {AddCategModal, AddPhotoModal, ShowImageModal} from '../modal_pages'



import './app.sass';
export class App extends Component {
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

    dynamCategoriesRoutesRender = (galeriesArr) => {  // Arr  of  Objcts
        return galeriesArr.map((gallery, idx) => {
            const {path, name} = gallery; 
             
            return (
                <Route exact path={`/${path}`} key={idx}>
                    <CategoryPage categPath={path} categName={name}/>
                </Route>
            )
        })
    }

    // { background && < Route path={`*/*/:id`} component={ShowImageModal} /> }
    // < Route path={`*/*/:id`} component={ShowImageModal} />

    render() {

        const {galleries} = this.state;

        if (!galleries) { return <span> Loading !!! </span>  }
        const categoryRoutes = this.dynamCategoriesRoutesRender(galleries);

        // FOR BACKGROUND & MODAL ON TOP
        // let {location} = this.props;
        // let background = location.state && location.state.background;


        return (
            <div>
                < Switch >

                    < Route exact path='/' component={GalleryPage}/>

                    {/* ALL CATEGORY PAGES HERE... */}
                    {categoryRoutes}

                    {/* MODALS ROUTES */}
                    < Route path='/categoryAddModal' component={AddCategModal} />
                    < Route path={`*/photoAddModal`} component={AddPhotoModal} /> 
                    < Route path={`*/*/:id`} component={ShowImageModal} />

                </Switch>

                {/* Show the modal when a background page is set */}

            </div>   
        )
    }
}

export default withRouter(App);