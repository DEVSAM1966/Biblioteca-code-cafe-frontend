import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosError, AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axiosInstance";

interface AxiosBaseQueryArgs extends AxiosRequestConfig {}

export const axiosBaseQuery =
	(): BaseQueryFn<AxiosBaseQueryArgs, unknown, unknown> => async (args) => {
		try {
			const result = await axiosInstance(args);
			return { data: result.data };
		} catch (axiosError) {
			const err = axiosError as AxiosError;
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			};
		}
	};
