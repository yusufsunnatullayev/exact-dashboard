import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import App from "./App";
import "./i18n";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			</PersistGate>
		</QueryClientProvider>
	</Provider>
);
