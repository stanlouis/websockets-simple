// Make Connection
let socket = io();

socket.on('connect', () => {
  console.log('Connected to client');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});