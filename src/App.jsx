import React from "react";
import './App.css';
import HomePage from "./components/pages/HomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import CodeInit from "./components/CodeInit.jsx";
import DashboardPage from "./components/pages/DashboardPage.jsx";
import AuthPage from "./components/pages/AuthPage.jsx";
const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/code" element={<CodeInit />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
