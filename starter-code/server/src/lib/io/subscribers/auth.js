import User from '../../../model/user.js'

const LOGIN = (socket) => (payload) => {
  // TODO: lookup the user
  // TODO: namem this socket with their username.
  // TODO: with the user, create an object with their username, some welcome content and a meta property
  // TODO: emit a "USER_CONNECTED" action for that with socket.broadcast
  // ... this ends up being "heard" by the IO listeners on the client (whoohoo!)

  let tokenSeed = payload.tokenSeed;
  User.findOne({tokenSeed})
    .then(user => {
      socket.username = user.username;

      let packet = {
        username: user.username,
        content: 'entered the chat',
        meta: true
      }
      socket.broadcast.emit('USER_CONNECTED', packet);
    })

}

const LOGOUT = (socket) => (payload) => {
  // TODO: create a "USER_DISCONNECTED" action with a payload of the user, some message and a true meta flag
  // TODO: emit that with socket.broadcast
  // TODO: delete socket.username
  let packet = {
    username: user.username,
    content: 'left the chat',
    meta: true
  }
  socket.broadcast.emit('USER_DISCONNECTED', packet);

}

export default {LOGIN, LOGOUT}
