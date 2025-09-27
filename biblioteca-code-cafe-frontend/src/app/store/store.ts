// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { emptySplitApi } from "../services/emptyApi";

export const store = configureStore({
	reducer: {
		[emptySplitApi.reducerPath]: emptySplitApi.reducer, // importa el reducer de RTK Query
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(emptySplitApi.middleware), // importa el middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
