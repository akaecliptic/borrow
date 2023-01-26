import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "pages/Home";
import Checkout from "pages/Checkout";
import "styles/index.scss";

const root: ReactDOM.Root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/checkout',
		element: <Checkout />
	}
]);

root.render(
	<RouterProvider router={router}/>
);
