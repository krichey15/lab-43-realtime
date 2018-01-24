// TODO: import our chat actions
import * as chatActions from './actions';

const MESSSAGE = (store) => (socket) => payload => {
  store.dispatch(chatActions.message(payload))
}

const USER_CONNECTED = (store) => (socket) => payload => {
  store.dispatch(chatActions.connect(payload))
}

const USER_DISCONNECTED = (store) => (socket) => payload => {
  store.dispatch(chatActions.disconnect(payload))
}

// TODO: Create subscribers (listeners for socket.io messages)
   // MESSAGE, USER_DISCONNECTED, USER_CONNECTED
   // Each of these curries store=>socket=>payload and dispatches the payload to the right chat.action
  // const SUBSCRIBERTYPE = (store) => (socket) => (payload) => {
  //   store.dispatch(someaction(payload))
  // }

// TODO: export these as default {s1,s2,s3}
