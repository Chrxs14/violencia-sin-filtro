import React from "react";

export const Modal = ({ children }) => {
  return (
    <>
      <div className="bg-white/50 fixed inset-0 z-10" />
      {children}
    </>
  );
};
