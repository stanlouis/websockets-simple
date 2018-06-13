// Make Connection
let socket = io();

socket.on('connect', () => {
  console.log('Connected to client');
  console.log(`socket id: ${socket.id}`)
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

// Query DOM
let $message = $('#message'),
  $handle = $('#handle'),
  $btn = $('#send'),
  $feedback = $('#feedback'),
  $output = $('#output');

// Emit events

$btn.on('click', function () {
  socket.emit('chat', {
    message: $message.val(),
    handle: $handle.val()
  });
});

$message.keypress(() => {
  socket.emit('typing', $handle.val());
})
// Listen for events
socket.on('chat', (data) => {
  $feedback.html('');
  $output.append(`<p><strong>${data.handle}: <strong>${data.message}</strong></strong></p>`)
})

socket.on('typing', data => {
  $feedback.html(`<p><em>${data} is typing a message...</em></p>`)
})