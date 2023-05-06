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
          <Route index element={<EventsPage />} />
          <Route path="posts/:id" element={<SinglePostPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="vote" element={<VotePage />} />
        </Route>
      </Routes>
    </>
  );
});

export default App;
