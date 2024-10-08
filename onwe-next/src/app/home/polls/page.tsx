"use client";

import PostAvatar from "@/components/post_component/PostAvatar";
import { Button } from "@/components/ui/button";
import RenderPoll from "./RenderPoll";

const tempData = [
  {
    id: 1,
    title: "option 1",
    username: "rituisby",
    avatar: "image",
    options: [
      { title: "option 1", votes: 10 },
      { title: "option 2", votes: 20 },
    ],
  },
  {
    id: 2,
    title: "option 2",
    options: [
      { title: "option 1", votes: 15 },
      { title: "option 2", votes: 15 },
    ],
  },
  {
    id: 3,
    title: "option 3",
    options: [
      { title: "option 1", votes: 29 },
      { title: "option 2", votes: 1 },
    ],
  },
  {
    id: 4,
    title: "option 4",
    options: [
      { title: "option 1", votes: 25 },
      { title: "option 2", votes: 5 },
    ],
  },
];

const Page = () => {
  return (
    <div className="flex overflow-auto h-screen w-screen">
      <div className="h-full w-full flex flex-col  overflow-y-auto scrollbar-hide gap-5 p-5">
        {tempData.map((poll, index) => (
          <RenderPoll key={poll.id} poll={poll} />
        ))}

        <div className="mt-20" />
      </div>
    </div>
  );
};

export default Page;
