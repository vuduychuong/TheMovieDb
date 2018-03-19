import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { Provider } from "react-redux";
import store from "./src/store";

export default class TheMovieDb extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent("TheMovieDb", () => TheMovieDb);
