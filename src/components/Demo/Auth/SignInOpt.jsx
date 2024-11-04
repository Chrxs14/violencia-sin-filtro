import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export const SignInOpt = ({ setSignReq }) => {
  const [createUser, setCreateUser] = useState(false);
  return (
    <>
      <h2 className="text-2xl pt-[5rem]">
        {createUser ? "Unirse al foro" : "Bienvenida de vuelta"}
      </h2>
      <div className="flex flex-col gap-2 w-fit m-auto">
        <Button
          icon={<FcGoogle />}
          text={`${createUser ? "Sign Up" : "Sign in"} With Google`}
        />
        <Button
          icon={<MdFacebook className="text-xl text-blue-600" />}
          text={`${createUser ? "Sign Up" : "Sign in"} With Facebook`}
        />
        <Button
          click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
          icon={<AiOutlineMail />}
          text={`${createUser ? "Sign Up" : "Sign in"} With Mail`}
        />
      </div>
      <p>
        {createUser ? "Ya tengo una cuenta" : "No tengo una cuenta"}
        <button
          onClick={() => setCreateUser(!createUser)}
          className="text-green-600 hover:text-green-700 font-bold ml-1"
        >
          {createUser ? "Sign in" : "Create one"}
        </button>
      </p>
    </>
  );
};

const Button = ({ icon, text, click }) => {
  return (
    <button
      onClick={click}
      className="flex items-center gap-10 sm:w-[20rem] border border-black
        px-3 py-2 rounded-full"
    >
      {icon}
      {text}
    </button>
  );
};
