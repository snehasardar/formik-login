import { combineReducers } from 'redux';

import auth from './auth.reducer';
import signCart from './sign.reducer'


const reducers = combineReducers({
    auth,
    signCart,
});

export default reducers;