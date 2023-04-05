import React, { useEffect } from "react";
import PostsStore from "../../store/PostsStore";
import { PostItem } from "../PostItem/PostItem";
import { observer } from "mobx-react-lite";

export const PostList = observer(() => {
  useEffect(() => {
    PostsStore.getPosts();
  }, []);
  return (
    <>
      {PostsStore.posts.map((post, index) => (
        <PostItem key={index}></PostItem>
      ))}
    </>
  );
});
