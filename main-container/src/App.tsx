import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AuthenticationApp = lazy(()=>import("authenticationApp/App"));
const NavigationBarApp=lazy(()=> import("navigationBarApp/App"));
const WeatherForecastApp=lazy(()=>import("weatherForecastApp/App"));

const App = () => {

    return (
        <BrowserRouter>
            <Suspense fallback={<CircularProgress />}>
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/authentication" element={<AuthenticationApp />} />
                    <Route path="/weather-forecast" element={<WeatherForecastApp />} />
                    <Route path="/navigation-bar" element={<NavigationBarApp />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;

const container = document.getElementById("app") as HTMLElement;
if (!container) {
    throw new Error("Root container #app not found");
}

const root = ReactDOM.createRoot(container);
root.render(<App />);