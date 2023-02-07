import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "pages/Home";
import Checkout from "pages/Checkout";
import Login from "pages/Login";
import Profile from "pages/Profile";
import Error404 from "pages/404";
import Floating from "layouts/Floating";
import "styles/globals.scss";

const root: ReactDOM.Root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/',
		element: <Floating />,
		children: [
			{
				path: '/checkout',
				element: <Checkout />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/user/:userId',
				element: <Profile />
			},
			{
				path: '*',
				element: <Error404 />,
			}		
		]
	}
]);

root.render(
	<RouterProvider router={router}/>
);
