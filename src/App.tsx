import "./App.css";
import "./i18n";
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale,
	BarElement,
	Legend,
	Tooltip,
	ArcElement,
} from "chart.js";

import { AppRoutes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

ChartJS.register(
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Legend,
	Tooltip,
	BarElement,
	ArcElement
);

function App() {
	return (
		<>
			{/* <PathListener /> */}
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</>
	);
}

export default App;
