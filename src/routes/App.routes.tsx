import React from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../Pages/Home";
import GamePage from "../Pages/Game";
import EndPage from "../Pages/End";
import HighScore from "../Pages/HighScore";


const AppRoutes: React.FC = () => (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomePage/>} />
                <Route path="/game" element={<GamePage/>} />
                <Route path="/end" element={<EndPage/>} />
                <Route path="/highScore" element={<HighScore/>} />
            </Routes>
        </BrowserRouter>
      
);

export default AppRoutes;