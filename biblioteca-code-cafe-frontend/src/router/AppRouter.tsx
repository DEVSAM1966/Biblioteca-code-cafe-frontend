import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Home } from "@/pages/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		children: [
			{ index: true, element: <Home /> },
			//  { path: 'sobre-nosotros', element: <AboutUs /> },
		],
	},
]);
