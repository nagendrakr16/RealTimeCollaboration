import React, { useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";

const Editor = () => {
  const [socket, setSocket] = useState(null);
  const [quill, setQuill] = useState(null);

  useEffect(() => {
    const s = io("http://localhost:8000"); // Change this to your backend WebSocket server
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket || !quill) return;

    socket.on("load-document", (data) => {
      quill.setContents(data);
    });

    socket.on("receive-changes", (delta) => {
      quill.updateContents(delta);
    });

    return () => {
      socket.off("receive-changes");
      socket.off("load-document");
    };
  }, [socket, quill]);

  useEffect(() => {
    const quillEditor = new Quill("#editor", { theme: "snow" });
    setQuill(quillEditor);

    quillEditor.on("text-change", (delta) => {
      if (socket) socket.emit("send-changes", delta);
    });

    return () => quillEditor.off("text-change");
  }, [socket]);

  return <div id="editor" style={{ height: "400px", border: "1px solid black" }} />;
};

export default Editor;
