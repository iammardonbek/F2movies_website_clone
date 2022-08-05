import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavbarData } from "./mock/NavbarMock";
import Entrance from "./pages/Entrance/Entrance";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Entrance />} />
        {NavbarData.map((value) => (
          <Route key={value.id} path={value.path} element={value.element} />
        ))}
      </Routes>
    </>
  );
};
export default App;
