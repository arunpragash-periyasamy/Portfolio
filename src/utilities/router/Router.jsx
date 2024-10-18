import { createBrowserRouter } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { lazy, Suspense } from "react";

const App = lazy(()=> import ("../../App"))

const router = createBrowserRouter([
    {
        path:"/",
        loader: Loader,
        element: (
            <Suspense fallback={<Loader/>}>
                <App />
            </Suspense>
        )
    }
])

export default router;