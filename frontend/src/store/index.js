import {createStore, compose, applyMiddleware, combineReducers} from "redux"
import thunk from 'redux-thunk';
import AuthReducer from "./reducers/auth";
import StatisticReducer from "./reducers/statistic";
import LocaleReducer from "./reducers/locale";

const composeEnhancers = typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const rootReducer = combineReducers({
  auth: AuthReducer,
  statistics: StatisticReducer,
  locales: LocaleReducer
});

const persistedState = localStorage.getItem('store')
  ? JSON.parse(localStorage.getItem('store'))
  : {}

const index = createStore(rootReducer, persistedState, composeEnhancers(
  applyMiddleware(thunk)
));

index.subscribe(()=> {
  localStorage.setItem('store', JSON.stringify(index.getState()))
})

export default index