import { Reducer, applyMiddleware,  combineReducers,  legacy_createStore as createStore } from "redux";
import BaseReducer from "./BaseReducer";
import { IBaseProps } from "./IBaseProps";
import thunkMiddleware from 'redux-thunk';

// const enhancers: any = compose(
//     install(),
//     applyMiddleware()
// );

const rootReducer = combineReducers({
    base: BaseReducer,
});

// const enhancedCreateStore = createStore as StoreCreator;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

// export const store = enhancedCreateStore(reduceReducers(rootReducer), {} as any, enhancers);