import { combineReducers } from 'redux-immutable';

import { reducer as loginReducer } from "@src/pages/login/store";

const reducer = combineReducers({
    login: loginReducer
});

export default reducer;