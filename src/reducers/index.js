import { combineReducers } from 'redux';
import foodReducer from './food_reducers';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  foodReducer,
  routing: routerReducer
});

export default rootReducer;
