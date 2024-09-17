import React from "react";
import { Route, Routes } from "react-router-dom";
import "../src/assets/css/index.css";
import "../src/assets/styles/style.scss";
import MainPage from "./layout/MainPage";
import Chatbot from "./pages/Chatbot/Chatbot";
import Libabout from "./pages/Libabout/Libabout";
import Libsetabout from "./pages/LibSetAbout/LibSetAbout";
import SubTest from "./pages/LibSetAbout/SubTest";
import Readbook from "./pages/ReadBook/ReadBook";

function App() {
    return (
        <div className="globalContainer">
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/chatbot" element={<Chatbot />}></Route>
                <Route path="/libabout" element={<Libabout />}></Route>
                <Route path="/libsetabout" element={<Libsetabout />}></Route>
                <Route path="/readbook" element={<Readbook />}></Route>
                <Route path="/subTest" element={<SubTest />}></Route>
            </Routes>
        </div>
    );
}

export default App;
