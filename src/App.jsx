import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CodeBall from "./pages/CodeBall";
import CodeFloat from "./pages/CodeFloat";
import CodeTree from "./pages/CodeTree";
import Atmos from "./pages/Atmos";
import Input from "./pages/Input";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/input" element={<Input />} />
        <Route path="/codefloat" element={<CodeFloat />} />
        <Route path="/codetree" element={<CodeTree />} />
<<<<<<< HEAD
        <Route path="/codedomino" element={<CodeDomino />} />
        <Route path="/atmos" element={<Atmos />} />
=======
        <Route path="/codeball" element={<CodeBall />} />
>>>>>>> 8b47bd2e516aa80bbf86f2676b8f3af2ace38fd8
        <Route path="/" element={<Navigate to="/input" />} />
      </Routes>
    </BrowserRouter>
  );
}
