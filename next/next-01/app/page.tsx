"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-lg">
      <div className="text-lg flex flex-col">
        Authentication application
        <br />
        <Link
          className="text-md text-center  border p-2 rounded-lg m-2 border-blue-500"
          href="/signin"
        >
          Sign in Todo app
        </Link>
        <br />
        <Link
          className="text-md text-center border p-2 rounded-lg m-2 border-red-400"
          href="/signup"
        >
          Sign up Todo app
        </Link>
      </div>
    </div>
  );
}
