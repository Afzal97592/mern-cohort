"use client";

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <div style={{}}>
        <TextInput
          placeholder={"Room name"}
          onChange={(e: any) => console.log("callle", e.target.value)}
        />
        <button
          onClick={() => {
            router.push("/chat/1");
          }}
        >
          Join room
        </button>
      </div>
    </div>
  );
}
