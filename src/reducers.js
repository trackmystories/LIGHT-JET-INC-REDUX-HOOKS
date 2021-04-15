import {combineReducers} from 'redux';
import {TOTAL_COMPONENTS} from './actions';

let dataState = {data: []};

const total_components = (state = dataState, action) => {
  switch (action.type) {
    case TOTAL_COMPONENTS:
      return {...state, data: action.data};
    default:
      return state;
  }
};

const fuselage_counter = (state = 50, action) => {
  switch (action.type) {
    case 'ADD_Fuselage':
      return state + 1;
    case 'REMOVE_Fuselage':
      if (state == 30) {
        return (state = 30);
      } else {
        return state - 1;
      }
    default:
      return state;
  }
};

const wing_counter = (state = 62, action) => {
  switch (action.type) {
    case 'ADD_Wings':
      return state + 1;
    case 'REMOVE_Wings':
      if (state == 30) {
        return (state = 30);
      } else {
        return state - 1;
      }

    default:
      return state;
  }
};

const empennage_counter = (state = 40, action) => {
  switch (action.type) {
    case 'ADD_Empennage':
      return state + 1;
    case 'REMOVE_Empennage':
      if (state == 30) {
        return (state = 30);
      } else {
        return state - 1;
      }

    default:
      return state;
  }
};

const power_plant_counter = (state = 45, action) => {
  switch (action.type) {
    case 'ADD_Power_Plant':
      return state + 1;
    case 'REMOVE_Power_Plant':
      if (state == 30) {
        return (state = 30);
      } else {
        return state - 1;
      }

    default:
      return state;
  }
};

const landing_gear_counter = (state = 30, action) => {
  switch (action.type) {
    case 'ADD_Landing_Gear':
      return state + 1;
    case 'REMOVE_Landing_Gear':
      if (state == 30) {
        return (state = 30);
      } else {
        return state - 1;
      }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  fuselage_counter,
  wing_counter,
  empennage_counter,
  power_plant_counter,
  landing_gear_counter,
  total_components,
});

export default rootReducer;
