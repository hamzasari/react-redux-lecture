import {createStore} from 'redux';
import rootReducer from './reducers';
import {setUserInfo} from './actions/user';

// https://github.com/zalmoxisus/redux-devtools-extension#usage
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(
  setUserInfo({
    name: 'HAMZA',
    surname: 'SARI',
  })
);

export default store;
