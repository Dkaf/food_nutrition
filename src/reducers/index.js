import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import foodReducer from './food_reducers';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  foodReducer,
  routing: routerReducer
});

export default rootReducer;
