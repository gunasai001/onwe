"use client";
import React from "react";
import { Info } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setClubTab } from "@/lib/features/clubs/tabSlice";
import { RootState } from "@/lib/store";

const GeneralAnnounce = () => {
  const dispatch = useDispatch();
  const tab = useSelector((state: RootState) => state.tab.tab);

  const handleTabClick = (tab: string) => {
    dispatch(setClubTab(tab));
  };

  return (
    <div className="sm:ml-[5%]   right-0 fixed z-10 w-[70vw] bg-white">
      <div className="w-full h-[8.05vh] items-center  border flex justify-between py-5 ">
        {/* <div className="pl-10 font-bold text-lg">Events</div> */}
        <div className="flex sm:gap-x-2 gap-x-3 items-center  sm:ml-60">
          <div
            className={`px-6 py-1 rounded-full flex items-center cursor-pointer text-sm sm:text-lg  ${tab === "general"
                ? "bg-black text-white"
                : "bg-white text-black border"
              }`}
            onClick={() => handleTabClick("general")}
          >
            General
          </div>
          <div
            className={`px-2 sm:px-6 py-1 rounded-full flex items-center cursor-pointer text-sm sm:text-lg ${tab === "announcement"
                ? "bg-black text-white"
                : "bg-white text-black border"
              }`}
            onClick={() => handleTabClick("announcement")}
          >
            Announcements
          </div>
        </div>
        <div className="pr-8 ml-2">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default GeneralAnnounce;
