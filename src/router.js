import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Streamer, Viewer } from "./screens";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/streamer" element={<Streamer />} />
        <Route path="/Viewer" element={<Viewer />} />
      </Routes>
    </BrowserRouter>
  );
};
