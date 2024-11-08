import React, { useState } from "react";
import { ProfileHome } from "./Activities/ProfileHome";
import { ProfileLists } from "./Activities/ProfileLists";
import { ProfileAbout } from "./Activities/ProfileAbout";
import { Modal } from "../../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia";
import img from "../../../assets/profile-icon.jpg";
import { discoverAcions } from "../../../data";
import { IoSettingsSharp } from "react-icons/io5";
import { EditProfile } from "./EditProfile";
import { Foro } from "../../../Context/Context";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const { allUsers, currentUser } = Foro();
  const { userid } = useParams();
  const activities = [
    {
      title: "Home",
      comp: ProfileHome,
    },
    {
      title: "Lists",
      comp: ProfileLists,
    },
    {
      title: "About",
      comp: ProfileAbout,
    },
  ];
  const [currentActive, setCurrentActive] = useState(activities[0]);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const getUserData = allUsers.find((user) => user.id === userid);
  const getUserDataImage = allUsers.find((user) => user.id == currentUser?.uid);

  console.log(getUserData);

  return (
    <section className="size flex gap-[4rem] relative">
      {/* users activities */}
      <div className="mt-[9rem] flex-[2]">
        <div className="flex items-end gap-4">
          <h2 className="text-3xl sm:text-5xl font-bold capitalize">
            Nombre Perfil
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">Followers(2)</p>
          <p className="text-gray-500 text-xs sm:text-sm">Followings(4)</p>
        </div>
        <div className="flex items-center gap-5 mt-[1rem] border-b border-gray-300 mb-[3rem]">
          {activities.map((item, i) => (
            <div
              key={i}
              className={`py-[0.5rem] ${
                item.title === currentActive.title
                  ? "border-b border-gray-500"
                  : ""
              }`}
            >
              <button onClick={() => setCurrentActive(item)}>
                {item.title}
              </button>
            </div>
          ))}
        </div>
        <currentActive.comp
          getUserData={getUserData}
          setEditModal={setEditModal}
        />
      </div>
      {/* button to open the side bar */}
      <button
        onClick={() => setModal(true)}
        className="fixed top-[8rem] right-0 w-[2rem] h-[2rem] bg-black text-white grid place-items-center md:hidden"
      >
        <IoSettingsSharp />
      </button>
      {/* user details */}
      <Modal modal={modal} setModal={setModal}>
        <div
          className={`flex-[1] border-l border-gray-300 p-[2rem] z-10
      fixed right-0 bottom-0 top-0 w-[18rem] bg-white md:relative 
      ${modal ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"}
      transition-all duration-500`}
        >
          {/* icons to close out modal */}
          <div className="pb-4 text-right">
            <button
              onClick={() => setModal(false)}
              className="inline-block md:hidden"
            >
              <LiaTimesSolid />
            </button>
          </div>
          {/* profile details */}
          <div className="sticky top-7 flex flex-col justify-between">
            <img
              className="w-[3.5rem] h-[3.5rem] object-cover rounded-full"
              src={getUserDataImage?.userImg ? getUserDataImage?.userImg : img}
              alt="profile-img"
            />
            <h2 className="py-2 font-bold capitalize">Nombre de perfil</h2>
            <p className="text-gray-500 first-letter:uppercase">
              Descripcion de perfil de usuario
            </p>
            <button
              onClick={() => setEditModal(true)}
              className="text-green-700 pt-6 text-sm w-fit"
            >
              Editar perfil
            </button>
            {/* nav */}
            <div className="flex-[1] flex items-center flex-wrap gap-3 pt-8">
              {discoverAcions.map((item, i) => (
                <button key={i} className="text-xs text-black1">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Modal>
      {editModal && (
        <EditProfile getUserData={getUserData} editModal={editModal} setEditModal={setEditModal} />
      )}
    </section>
  );
};
