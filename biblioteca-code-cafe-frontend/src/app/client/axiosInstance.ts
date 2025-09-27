import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.example.com",
	headers: {
		"Content-Type": "application/json",
	},
});

// Interceptor para añadir token dinámicamente
axiosInstance.interceptors.request.use((config) => {
	return config;
});

// Interceptor de la respuesta que manda la peticion
axiosInstance.interceptors.response.use((response) => {
	return response;
});
