import React from 'react';
import ReactDom from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {RouterProvider} from 'react-router-dom';
import router from './src/utils/Router';
import { ConfigProvider, theme } from 'antd';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider theme={{
        algorithm:theme.darkAlgorithm
    }}>
        <RouterProvider router={router} />
    </ConfigProvider>
);

export default root;