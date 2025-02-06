import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default function Home() {
  const session = getServerSession();
  console.log(session, "session");
  return <div>{JSON.stringify(session)}</div>;
}

function OtherHome() {
  const session = useSession();
  return (
    <div>
      {session.status === "authenticated" && (
        <button onClick={() => signOut()}>Logout</button>
      )}
      {session.status === "unauthenticated" && (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
}
