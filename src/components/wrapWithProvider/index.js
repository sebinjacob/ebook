import React from "react";
import { Provider } from "react-redux";
import sotreConfig from "../../store";

export default (App) => () =>
    (
        <Provider store={sotreConfig()}>
            <App />
        </Provider>
    );
