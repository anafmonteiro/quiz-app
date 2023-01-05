import React from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import GamePage from "../Pages/Game";
import HomePage from "../Pages/Home";


const AppRoutes: React.FC = () => (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomePage/>} />
                <Route path="/game" element={<GamePage/>} />
            </Routes>
        </BrowserRouter>
      
);

export default AppRoutes;