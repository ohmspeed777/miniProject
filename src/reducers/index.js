import { combineReducers } from 'redux';

const init = {
  name: 'Chet',
  firstName: 'Chetsadakorn',
};

export default combineReducers({
  test: (state = init, action) => {
    if (action.type === 'test') {
      // console.log(action);
      return {
        ...state,
        name: action.name,
      };
    }

    return state;
  },
});
