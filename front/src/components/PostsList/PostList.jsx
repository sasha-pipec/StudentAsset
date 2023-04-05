import React, { useEffect } from "react";
import PostsStore from "../../store/PostsStore";
import { PostItem } from "../PostItem/PostItem";
import { observer } from "mobx-react-lite";

export const PostList = observer(() => {
  useEffect(() => {
    PostsStore.getPosts();
  }, []);
  return (
    <div className="postlist">
      {PostsStore.posts.map((post, index) => (
        <PostItem
          key={index + 1}
          index={index + 1}
          img={post.image}
          title={post.title}
          date={post.date}
        />
      ))}
    </div>
  );
});
