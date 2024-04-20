function textEditorSocket(io) {
  io.on("connection", (socket) => {
    socket.on("text_editor_event", (data) => {
    });

  });
}

module.exports = { textEditorSocket };
