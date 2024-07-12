import HeaderTimeline from "@/components/header";
import Post from "@/components/post";
import TabBar from "@/components/tabbar";
import React from "react";

export default function Timeline() {
  return (
    <>
    <HeaderTimeline/>
      <div className="post-container">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
      <TabBar />
    </>
  );
}
