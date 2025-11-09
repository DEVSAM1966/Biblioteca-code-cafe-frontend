import { Outlet } from "react-router";
import Header from "../modules/core/header/Header";

export const DefaultLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
				Footer
			</footer>
		</>
	);
};
