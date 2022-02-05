import { memo, VFC } from "react";
import {  Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Users } from "../components/pages/Users";

export const Router: VFC = memo(() => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Users />} />
    </Routes>
  )
});
