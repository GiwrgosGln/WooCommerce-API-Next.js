"use client";
import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "http://localhost/woocommerce-api/wp-json/wp/v2/posts?_embed"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="bg-black">
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-40 sm:mx-20 gap-6">
        {posts.map((post) => (
          <div className="mt-4" key={post.id}>
            {post.featured_media &&
              post._embedded &&
              post._embedded["wp:featuredmedia"] && (
                <img
                  className="w-full h-2/3 rounded-3xl sm:w-full"
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                />
              )}
            <h2 className="text-xl text-white font-bold text-center sm:text-md md:text-lg">
              {post.title.rendered}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
