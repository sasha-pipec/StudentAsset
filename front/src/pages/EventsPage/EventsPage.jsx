import React from "react";
import { PostList } from "../../components/PostsList/PostList";
const EventsPage = () => {
  return (
    <div>
      <div>
        <h1>БЛИЖАЙШИЕ СОБЫТИЯ</h1>
      </div>
      <div>
        <PostList></PostList>
      </div>
    </div>
  );
};
export { EventsPage };
