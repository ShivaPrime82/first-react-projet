import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { ToastContainer } from 'react-toastify/';
import 'react-toastify/dist/ReactToastify.min.css';

import Navigation from './compoments/Navigation';

import Home from './pages/Home';
import Signin from './pages/Signin';
import CreateUsers from './pages/CreateUsers';
import CreateArticle from './pages/CreateArticle';
import DeleteArticle from './pages/DeleteArticle';
import ViewArticle from './pages/ViewArticle';
import NotFound from './pages/NotFound';


const App = () => {
    return (
        <CookiesProvider>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/inscription" component={CreateUsers} />
                    <Route path="/articles/create" component={CreateArticle} />
                    <Route path="/articles/delete" component={DeleteArticle} />
                    <Route path="/article/:id" component={ViewArticle} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <ToastContainer />
            </Router>
        </CookiesProvider>
    );
}

export default App; // module.exports = App; 
