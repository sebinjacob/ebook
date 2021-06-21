import ConfigSessionStorage from "../../utils/localStorageConfig";

const storage = new ConfigSessionStorage("BOOK");

// eslint-disable-next-line import/prefer-default-export
export const synStorage = () => (dispathCallBack) => (dispatchingAction) => {
    if (dispatchingAction.type === "SET_BOOK")
        storage.setData(dispatchingAction.data);
    return dispathCallBack(dispatchingAction);
};
