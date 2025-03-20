import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PathListener: React.FC = () => {
	const location = useLocation();

	useEffect(() => {
		if (
			location.pathname !== "/auth/login" &&
			location.pathname !== "/" &&
			location.pathname !== "/auth"
		) {
			sessionStorage.setItem("prevLocation", location.pathname);
		}
	}, [location.pathname]);

	return null;
};

export default PathListener;
