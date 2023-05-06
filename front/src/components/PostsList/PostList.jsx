import React, { useEffect } from "react";
import { PostItem } from "../PostItem/PostItem";
import { observer } from "mobx-react-lite";
import { PaginationPosts } from "../PaginationPosts/PaginationPosts";
import store from "../../store/store";

export const PostList = observer(() => {
  let page = 1;
  useEffect(() => {
    store.posts.getPosts(page);
  }, []);
  return (
    <>
      <div className="postlist">
        {store.posts.posts.map((post, index) => (
          <PostItem
            key={index + 1}
            index={index + 1}
            to={post.id}
            img={post.image}
            title={post.title}
            date={post.date}
          />
        ))}
      </div>
      <PaginationPosts></PaginationPosts>
    </>
  );
});
