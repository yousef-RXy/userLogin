import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { AuthContexProvider } from "./store/auth-contex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<AuthContexProvider>
			<App />
		</AuthContexProvider>
	</StrictMode>
);
