import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { EventsPage } from "./pages/EventsPage/EventsPage";
import { VotePage } from "./pages/VotePage/VotePage";
import { Layout } from "./components/Layout/Layout";
import { observer } from "mobx-react-lite";
import { SinglePostPage } from "./pages/SinglePostPage/SinglePostPage";
import store from "./store/store";
import { Index } from "./pages/MainPage";
const App = observer((Component, pageProps) => {
  store.user.auth();
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="posts/:id" element={<SinglePostPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="vote" element={<VotePage />} />
        </Route>
      </Routes> */}
    </>
  );
});

export default App;
