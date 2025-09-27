import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../client/axiosBaseQuery";

export const emptySplitApi = createApi({
	baseQuery: axiosBaseQuery(),
	endpoints: () => ({}),
	// endpoints: (build) => ({
	//Peticiones que se hace al backend
	// ejemplo:
	// postLoginUser: build.mutation<LoginResponse, LoginRequest>({
	//   query: (loginData) => ({
	//     url: "auth/login", <--- eso es la extension de la URL base que ya esta en la instancia de axiosInstance
	//     method: "POST",
	//     data: loginData, <--- los argumentos que le pasas al cuerpo
	//   }),
	// }),
	//LoginResponse es el tipado de la respuesta que recibe del backend
	//LoginRequest son los argumentos tipado que va pedir el cuerpo en este caso loginData
	// }),
});
