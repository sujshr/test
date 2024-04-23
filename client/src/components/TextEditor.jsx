import React, { useCallback, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import ToolBar from "./ToolBar";
import "../css/TextEditor.css";
import { io } from "socket.io-client";

function TextEditor() {
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();

  const wrapperRef = useCallback((wrapper) => {
    console.log(wrapper);
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");

    wrapper.append(editor);
    const q = new Quill(editor, {
      modules: {
        toolbar: { container: "#toolbar" },
      },
      theme: "snow",
    });
    setQuill(q);
  }, []);

  useEffect(() => {
    const socketConnection = io(
      import.meta.env.VITE_REACT_APP_TEXT_EDITOR_SOCKET
    );

    setSocket(socketConnection);
    return () => {
      socketConnection.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null || quill == null) {
      return;
    }
    const handler = (delta, oldDelta, source) => {
      if (source !== "user") {
        return;
      }
      socket.emit("send-changes", delta);
    };

    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [socket, quill]);
  
  return (
    <div className="relative textEditor">
      <ToolBar />
      <div id="textEditorContainer" ref={wrapperRef}>
        <div id="editor"></div>
      </div>
    </div>
  );
}

export default TextEditor;
