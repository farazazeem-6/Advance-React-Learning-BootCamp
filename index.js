import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { lazy, Suspense } from "react";


const About = lazy(() =>
    import('./src/components/About')
)
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense><About /></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={appRouter} />

)