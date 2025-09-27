import { Outlet } from "react-router";

export const DefaultLayout = () => {
	return (
		<>
			<header>Header</header>
			<Outlet />
			<footer>Footer</footer>
		</>
	);
};
