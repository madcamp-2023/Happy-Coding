import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CodeDomino from "./pages/CodeDomino";
import CodeFloat from "./pages/CodeFloat";
import CodeTree from "./pages/CodeTree";
import Input from "./pages/Input";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/input" element={<Input />} />
        <Route path="/codefloat" element={<CodeFloat />} />
        <Route path="/codetree" element={<CodeTree />} />
        <Route path="/codedomino" element={<CodeDomino />} />
        <Route path="/" element={<Navigate to="/input" />} />
      </Routes>
    </BrowserRouter>
  );
}
