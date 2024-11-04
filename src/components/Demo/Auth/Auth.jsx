import React from "react";
import { Modal } from "../../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export const Auth = () => {
  return (
    <Modal>
      <section
        className="z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] 
        overflow-auto right-0 md:right-[10rem] bg-white shadows"
      >
        <button className="absolute top-8 right-8 text-2xl hover:apacity-50">
          <LiaTimesSolid />
        </button>
        <div className="flex flex-col justify-center items-center fap-[3rem]">
          <>
            <h2 className="text-2x1 pt-[5rem]">Bienvenido</h2>
            <div>
                <Button icon={<FcGoogle/>} text={"Sign In With Google"}/>
                <Button icon={<MdFacebook/>} text={"Sign In With Facebook"}/>
                <Button icon={<AiOutlineMail/>} text={"Sign In With Mail"}/>
            </div>
          </>
        </div>
      </section>
    </Modal>
  );
};

const Button = ({ icon, text, click }) => {
  return (
    <button
      className="flex items-center gap-10 sm:w-[20rem] border border-black
        px-3 py-2 rounded-full"
    >
      {icon}
      {text}
    </button>
  );
};
