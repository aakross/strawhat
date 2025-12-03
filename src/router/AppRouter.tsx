// src/app/router/AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pxm from "../pages/Pxm";
import Tulum from "../pages/Tulum";
import Cdmx from "../pages/Cdmx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pxm" element={<Pxm />} />
        <Route path="/tulum" element={<Tulum />} />
        <Route path="/cdmx" element={<Cdmx />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
