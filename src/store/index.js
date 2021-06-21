import { createStore, applyMiddleware } from "redux";
import { synStorage } from "./middlewares";
import rootReducer from "./reducers";
// eslint-disable-next-line import/named
import initStore from "./initStore";

export default () => {
    const customMiddlewares = applyMiddleware(synStorage);
    const store = createStore(rootReducer, initStore(), customMiddlewares);
    return store;
};
