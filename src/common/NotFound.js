import React from 'react';
import Layout from "./Layout";
import errorImage from '../images/404-error-template-3.jpg';

const NotFound = () => {
    return (
        <Layout>
            <img src={errorImage} alt="404"/>
        </Layout>
    );
}
export default NotFound;