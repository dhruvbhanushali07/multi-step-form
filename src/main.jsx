import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "/src/routes/Root.jsx";
import "./index.css";
import Step1 from "./routes/Step1";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Step1 />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
