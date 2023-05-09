import React from "react";
import { Routes, Route } from "react-router-dom";
import { EventsPage } from "./pages/EventsPage/EventsPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { VotePage } from "./pages/VotePage/VotePage";
import { Layout } from "./components/Layout/Layout";
import { observer } from "mobx-react-lite";
import { SinglePostPage } from "./pages/SinglePostPage/SinglePostPage";
import store from "./store/store";
const App = observer(() => {
  store.user.auth();
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="posts/:id" element={<SinglePostPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="vote" element={<VotePage />} />
        </Route>
      </Routes>
    </>
  );
});

export default App;
