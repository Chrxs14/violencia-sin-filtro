import React, { useState } from "react";
import { Modal } from "../../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { SignInOpt } from "./SignInOpt";
import { useNavigate } from "react-router-dom";

export const Auth = ({ modal, setModal }) => {
  const [signReq, setSignReq] = useState("");
  const navigate = useNavigate();

  const hidden = modal ? "visible opacity-100" : "invisible opacity-0";

  return (
    <Modal modal={modal} setModal={setModal} hidden={hidden}>
      <section
        className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] 
        overflow-auto right-0 md:right-[10rem] bg-white shadows transition-all duration-500
        ${modal ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <button
          onClick={() => setModal(false)}
          className="absolute top-8 right-8 text-2xl hover:opacity-50"
        >
          <LiaTimesSolid />
        </button>
        <div className="flex flex-col justify-center items-center gap-[3rem]">
          {signReq === "" ? (
            <SignInOpt setSignReq={setSignReq} />
          ) : signReq === "sign-in" ? (
            <SignIn setSignReq={setSignReq} />
          ) : signReq === "sign-up" ? (
            <SignUp setSignReq={setSignReq} />
          ) : null}
          <p className="md:w-[30rem] mx-auto text-center text-sm mb-[3rem]">
            Click "Sign In" to agree to foro terms of service and acknowledge
            that foro's privacy policy applies to you.
          </p>
        </div>
      </section>
    </Modal>
  );
};
