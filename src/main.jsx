
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import "./niharika.css"      
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render( <App />)

import store from './store.jsx';
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')).render(
    <App/>
    </Provider>
)