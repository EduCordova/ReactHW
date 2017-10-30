//Dependencias
import React from 'react'; 
import {render} from 'react-dom';
import {BrowserRouter as  Router} from 'react-router-dom';
//Assets
import './index.css';
// import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';

//Rutas
import AppRoutes from './routes';


render(
    <Router>
        <AppRoutes/>
    </Router>,
    document.getElementById('root')
);
// registerServiceWorker();
