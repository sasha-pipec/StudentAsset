import React, { useEffect } from "react";
import PostsStore from "../../store/PostsStore";
import { PostItem } from "../PostItem/PostItem";
import { observer } from "mobx-react-lite";
import { PaginationPosts } from "../PaginationPosts/PaginationPosts";

export const PostList = observer(() => {
  let page = 1;
  useEffect(() => {
    PostsStore.getPosts(page);
  }, []);
  return (
    <>
      <div className="postlist">
        {PostsStore.posts.map((post, index) => (
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
