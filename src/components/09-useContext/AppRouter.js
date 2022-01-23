import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { Navbar } from "./Navbar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route index={true} path={"/"} element={<HomeScreen />} />

            <Route path={"about"} element={<AboutScreen />} />
            <Route path={"login"} element={<LoginScreen />} />

            <Route path="*" element={<HomeScreen />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
