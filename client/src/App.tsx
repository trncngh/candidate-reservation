import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import ROUTES from "./app/ROUTES";
import Admin from "./features/admin/Admin";
import MeetingReversation from "./features/home/MeetingReservation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.adminRoute()} element={<Admin />} />
          <Route
            path={ROUTES.homeRoute()}
            index
            element={<MeetingReversation />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
