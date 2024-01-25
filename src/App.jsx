import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CodeBall from "./pages/CodeBall";
import CodeFloat from "./pages/CodeFloat";
import CodeAtmos from "./pages/CodeAtmos";
import Atmos from "./pages/Atmos";
import Input from "./pages/Input";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/input" element={<Input />} />
        <Route path="/codefloat" element={<CodeFloat />} />
        <Route path="/codeball" element={<CodeBall />} />
        <Route path="/codeatmos" element={<CodeAtmos />} />
        <Route path="/freeatmos" element={<Atmos />} />
        <Route path="/" element={<Navigate to="/input" />} />
      </Routes>
    </BrowserRouter>
  );
}
