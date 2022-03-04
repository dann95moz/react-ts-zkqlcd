import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'react-thunk';
import { studentsReducers } from './reducers/studentsReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  estudiantes: studentsReducers,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
