import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const SignInOpt = ({ setSignReq }) => {
  const googleAuth = async () => {
    try {
      const createUser = await signInWithPopup(auth, provider);
      const newUser = createUser.user;

      const ref = doc(db, "users", newUser.uid);
      const userDoc = await getDoc(ref);

      if (!userDoc.exists()) {
        await setDoc(ref, {
          userId: newUser.uid,
          username: newUser.displayName,
          email: newUser.email,
          userImg: newUser.photoURL,
          bio: "",
        });
        navigate("/");
        toast.success("User have been Signed in");
        setModal(false);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [createUser, setCreateUser] = useState(false);
  return (
    <>
      <h2 className="text-2xl pt-[5rem]">
        {createUser ? "Unirse al foro" : "Bienvenida de vuelta"}
      </h2>
      <div className="flex flex-col gap-2 w-fit m-auto">
        <Button
          click={googleAuth}
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
