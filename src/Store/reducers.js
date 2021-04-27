import { combineReducers } from 'redux';
import liftReducer from './liftReducer';

const reducers = combineReducers({
    liftReducer,
});
export default reducers;