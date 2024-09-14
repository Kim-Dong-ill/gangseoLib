import React from "react";
import { Route, Routes } from "react-router-dom";
import Chatbot from "./pages/Chatbot/Chatbot";
import Libabout from "./pages/Libabout/Libabout";
import Libsetabout from "./pages/LibSetAbout/LibSetAbout";
import Readbook from "./pages/ReadBook/ReadBook";
import MainPage from "./layout/MainPage";
import "../src/assets/css/index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/chatbot" element={<Chatbot />}></Route>
        <Route path="/libabout" element={<Libabout />}></Route>
        <Route path="/libsetabout" element={<Libsetabout />}></Route>
        <Route path="/readbook" element={<Readbook />}></Route>
      </Routes>
    </>
  );
}

export default App;
