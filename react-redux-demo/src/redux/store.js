import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// const store = createStore(rootReducer);

export default store;
