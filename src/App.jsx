import React, { useRef, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CodeFloat from "./pages/CodeFloat";
import Input from "./pages/Input";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/input" element={<Input />} />
        <Route path="/codefloat" element={<CodeFloat />} />
        <Route path="/" element={<Navigate to="/input" />} />
      </Routes>
    </BrowserRouter>
  );
}
