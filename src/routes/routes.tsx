import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login";
import Layout from "../components/Layout";

export const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/login" replace />} />
			<Route path="/dashboard" element={<ProtectedRoute element={<Layout />} />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<Navigate to="/login" replace />} />
		</Routes>
	);
};
