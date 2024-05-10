import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AppContext} from "./context/AppContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./components/pages/App";
import Product from "./components/pages/Product";
import NotFound from "./components/common/NotFound";

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppRoutes = () => {
    return (<AppContext>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/features" element={<App/>}/>
                <Route path="/marketplace" element={<App/>}/>
                <Route path="/company" element={<App/>}/>
                <Route path="/analytics" element={<App/>}/>
                <Route path="/engagement" element={<App/>}/>
                <Route path="/security" element={<App/>}/>
                <Route path="/integrations" element={<App/>}/>
                <Route path="/automations" element={<App/>}/>
                <Route path="/watch-demo" element={<App/>}/>
                <Route path="/contact-sale" element={<App/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </AppContext>);
}

root.render(<React.StrictMode>
    <AppRoutes/>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
