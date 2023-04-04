import React from "react";
import { Routes, Route } from "react-router-dom";
import { EventsPage } from "./pages/EventsPage/EventsPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { VotePage } from "./pages/VotePage/VotePage";
import { Header } from "./components/header/header";
import { observer } from "mobx-react-lite";
import UserStore from "./store/UserStore";
const App = observer(() => {
  const token = localStorage.getItem("token");
  if (token !== null && UserStore.isAuthenticated === false) {
    UserStore.auth(token);
  } else {
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<EventsPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="vote" element={<VotePage />} />
        </Route>
      </Routes>
    </>
  );
});

export default App;
