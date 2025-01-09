import { useEffect, useRef, useState } from "react";
function App() {
  const [socket, setSocket] = useState(null);
  const wsRef = useRef(null);
  const [messages, setMessages] = useState(["hi there"]);
  const [messageString, setMessageString] = useState("");

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");

    ws.onmessage = (event) => {
      console.log("event", event);
      setMessages((m) => [...m, event.data]);
    };
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="h-screen  bg-black  ">
      <div className="h-[85vh] pt-8  ">
        {messages.map((message, i) => (
          <span
            key={i}
            className="p-2 m-8  flex-col text-black bg-white rounded-lg  "
          >
            {message}
          </span>
        ))}
      </div>
      <div className="w-full flex p-4">
        <input
          type="text"
          className="flex-1 px-2 "
          value={messageString}
          placeholder="Type message....."
          onChange={(e) => setMessageString(e.target.value)}
        />
        <button
          onClick={() => {
            const data = {
              type: "chat",
              payload: {
                message: messageString,
              },
            };
            wsRef.current.send(JSON.stringify(data));
          }}
          className="bg-purple-600  p-4 text-white"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default App;
