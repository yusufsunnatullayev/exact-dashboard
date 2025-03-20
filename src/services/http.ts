import axios from "axios";
import { config } from "../config"; // Your config file with baseURL and backendTokenKEY
import { store } from "../store"; // Import your Redux store

// Create the Axios instance
export const http = axios.create({
	baseURL: config.baseURL,
	timeout: 10000, // Optional: Set a timeout (10 seconds) for requests
	headers: {
		"Content-Type": "application/json", // Default content type
	},
});

http.interceptors.request.use(
	(request) => {
		const state = store.getState();
		const token = state.auth?.token;

		if (token) {
			request.headers[config.backendTokenKEY] = `Bearer ${token}`;
		}

		return request;
	},
	(error) => {
		return Promise.reject(error);
	}
);

http.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response) {
			const { status } = error.response;

			if (status === 401) {
				console.log("Unauthorized - possibly expired token");
			} else if (status === 403) {
				console.log("Forbidden - insufficient permissions");
			} else if (status >= 500) {
				console.log("Server error - something went wrong on the backend");
			}
		} else if (error.request) {
			console.log("Network error - no response from server");
		} else {
			// Other errors (e.g., configuration issues)
			console.log("Request setup error:", error.message);
		}

		return Promise.reject(error); // Pass the error to the caller
	}
);

export default http;
