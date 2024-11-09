import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Preview } from "./Preview";

export const Write = () => {
  const [description, setDescription] = useState("");
  return (
    <section className="w-[90%] md:w-[90%] lg:w-[60%] mx-auto py-[3rem]">
      <input
        type="text"
        placeholder="Titulo"
        className="text-4xl outline-none w-full"
      />
      <ReactQuill
        theme="bubble"
        value={description}
        onChange={setDescription}
        placeholder="Cuenta tu historia..."
        className="write my-5"
      />
      <div>
        <Preview />
      </div>
    </section>
  );
};
