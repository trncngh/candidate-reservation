import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
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
