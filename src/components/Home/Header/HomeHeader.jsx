import React, { useState } from "react";
import { BsMedium } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { Modal } from "../../../utils/Modal.jsx";
import img from "../../../assets/profile-icon.jpg";
import { UserModal } from "../UserModal/UserModal.jsx";

function HomeHeader() {
  const [modal, setModal] = useState(true);
  return (
    <header className="border-b border-gray-200">
      {/* left side */}
      <div className="size h-[60px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/">
            {" "}
            <span className="text-5xl">
              <BsMedium />
            </span>
          </Link>
          <Search />
        </div>
        {/* right side */}
        <div className="flex items-center gap-3 sm:gap-7">
          <Link
            to="/write"
            className="hidden md:flex items-center gap-1 text-gray-500"
          >
            <span className="text-3xl">
              <LiaEditSolid />
            </span>
            <span className="text-sm mt-2">Write</span>
          </Link>
          <span className="text-3xl text-gray-500 cursor-pointer">
            <IoMdNotificationsOutline />
          </span>
          <div className="flex items-center relative">
            <img
              className="w-[2.3rem] hr-[2.3rem] object-cover rounded-full cursor-pointer"
              src={img}
              alt="profile-img"
            />
            <span className="text-gray-500 cursor-pointer">
              <MdKeyboardArrowDown />
            </span>
            <Modal modal={modal} setModal={setModal}>
              <div>
                <UserModal/>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
