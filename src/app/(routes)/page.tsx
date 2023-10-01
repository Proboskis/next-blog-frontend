"use client";

import PostCard from "@next-blog/app/components/post-card";
import Header from "@next-blog/app/components/header";

export default function App() {
  return (
    <>
      <Header/>
      <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row">
        <main className="grid w-full max-w-lg gap-5 p-12 mt-12 grid-cols-[min-content] md:grid-cols-1 md:max-w-lg lg:grid-cols-2 lg:max-w-6xl
          2xl:grid-cols-3 2xl:max-w-7xl bg-black">
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </main>
      </div>
    </>
  );
}