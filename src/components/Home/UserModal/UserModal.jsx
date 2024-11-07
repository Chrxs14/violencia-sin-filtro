import React from "react";
import { LiaUserSolid } from "react-icons/lia";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { BiSpreadsheet } from "react-icons/bi";
import { HiOutlineChartBar } from "react-icons/hi";
import { LiaEditSolid } from "react-icons/lia";
import { Foro } from "../../../Context/Context";
import { Link } from "react-router-dom";

export const UserModal = () => {
  const { currentUser } = Foro();
  const userModal = [
    {
      title: "Profile",
      icon: <LiaUserSolid />,
      path: `/profile/${currentUser?.uid}`,
    },
    {
      title: "Library",
      icon: <MdOutlineLocalLibrary />,
      path: `/library`,
    },
    {
      title: "Stories",
      icon: <BiSpreadsheet />,
      path: `/stories`,
    },
    {
      title: "Stats",
      icon: <HiOutlineChartBar />,
      path: `/stats`,
    },
  ];
  return (
    <section className="absolute w-[18rem] p-6 bg-white right-0 top-[100%] shadows rounded-md z-50 text-gray-500">
       <Link
            to="/write"
            className="hidden md:flex items-center gap-1 text-gray-500"
          >
            <span className="text-3xl">
              <LiaEditSolid />
            </span>
            <span className="text-sm mt-2">Write</span>
          </Link>
    </section>
  );
};
