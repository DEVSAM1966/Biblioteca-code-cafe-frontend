import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";
import { router } from "./router/AppRouter.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</StrictMode>,
	);
}

// createRoot(document.getElementById('root')!).render(
//    <StrictMode>
//       <Provider store={store}>
//          <RouterProvider router={router} />
//       </Provider>
//    </StrictMode>
// )
