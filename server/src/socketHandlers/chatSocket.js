function chatSocket(io) {
  io.on("connection", (socket) => {
    socket.on("chat_message", (message) => {});
  });
}

module.exports = { chatSocket };
