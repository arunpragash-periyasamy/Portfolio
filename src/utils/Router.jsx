import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loader from '../Components/Loader/Loader';
import ContentComponent from '../Components/ContentComponent';
import About from '../Components/About/About';
import Work from '../Components/Work';
import Resume from '../Components/Resume/Resume';
import NewProductForm from '../NewProductForm';

const App = lazy(() => import("../App") );
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <ContentComponent />,
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            ),
          },
          {
            path: "/work",
            element: (
              <Suspense fallback={<Loader />}>
                <Work />
              </Suspense>
            ),
          },
          {
            path: "/resume",
            element: (
              <Suspense fallback={<Loader />}>
                <Resume />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/add-product",
    element: <NewProductForm />,
  },
]);

export default router;