import {combineReducers} from 'redux';

import auth from "./auth";
import route from "./routes";
import profile from "./profile";
import chat from '../../components/chat/reducer';

// TODO: import and combine the chat reducer

export default combineReducers({
    auth, route, profile
});
