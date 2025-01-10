"use client";

import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-4 bg-slate-400 h-[50vh] w-[50vw] items-center justify-center shadow-md shadow-cyan-600 rounded-md flex flex-col ">
        <h1 className="m-4 text-3xl  ">Sign Up</h1>
        <input
          type="text"
          className="m-2 w-full px-2 py-2  rounded-sm text-black"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
        />
        <input
          type="text"
          className="m-2 w-full  px-2 text-black py-2 rounded-sm"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="m-2 px-4 py-2  w-[70%]  rounded-md mt-10 bg-zinc-500"
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signup", {
              username,
              password,
            });
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
