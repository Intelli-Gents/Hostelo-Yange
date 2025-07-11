import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';

//Components
import App from './App.jsx'

import Explore from './component/Explore';
import Favorites from './component/Favorites';
import About from './component/About';

import Accomodation from './component/Accomodation';
import Create from './component/Create';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/explore',
        element: <Explore />
    },
    {
        path: '/favorites',
        element: <Favorites />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/accomodation',
        element: <Accomodation />
    },
    {
        path: '/create',
        element: <Create />
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
