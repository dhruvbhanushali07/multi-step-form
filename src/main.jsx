import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "/src/routes/Root.jsx";
import "./index.css";
import Step1 from "./routes/Step1";
import Step2 from "./routes/Step2";
import Step3 from "./routes/Step3";
import Step4 from "./routes/Step4";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
