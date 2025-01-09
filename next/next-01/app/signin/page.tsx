"use client";

import axios from "axios";
import { useState } from "react";

export default function Signin() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-2 rounded-sm">
        <input type="text" className="" placeholder="username" />
        <input type="text" className="" placeholder="password" />
        <button
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signin", {});
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
