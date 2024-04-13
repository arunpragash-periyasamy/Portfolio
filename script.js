import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {RouterProvider} from 'react-router-dom';
import router from './src/utils/Router';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

export default root;