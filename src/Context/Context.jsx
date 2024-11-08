import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth, db } from "../firebase/firebase";
import { Loading } from "../components/Common/Loading/Loading";
import { collection, onSnapshot, query } from "firebase/firestore";

const ForoContext = createContext();

export const Context = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);

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

  useEffect(() => {
    const getUsers = () => {
      const postRef = query(collection(db, "users"));
      onSnapshot(postRef, (snapshot) => {
        setAllUsers(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
        setUserLoading(false)
      });

    };
    getUsers();
  }, []);
  console.log(allUsers);

  return (
    <ForoContext.Provider value={{ currentUser, setCurrentUser, allUsers, userLoading }}>
      {console.log(allUsers)}
      {loading ? <Loading /> : children}
    </ForoContext.Provider>
  );
};

export const Foro = () => useContext(ForoContext);
