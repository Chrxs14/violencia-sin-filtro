import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase";
import { Loading } from "../components/Common/Loading/Loading";

const ForoContext = createContext();

export const Context = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsuscribe();
  }, [currentUser]);
  return (
    <ForoContext.Provider value={{ currentUser, setCurrentUser }}>
      {loading ? <Loading /> : children}
    </ForoContext.Provider>
  );
};

export const Foro = () => useContext(ForoContext);
