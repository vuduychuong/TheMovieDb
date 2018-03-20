/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
"use strict";

import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Home from "./src/screens/Home";

import { addNavigationHelpers } from "react-navigation";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { AppNavigator } from "./src/reducers/NavReducer";
const addListener = createReduxBoundAddListener("root");

class App extends React.Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener
                })}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonTouch: {
        height: 200,
        width: 400,
        backgroundColor: "green"
    }
});

function mapStateToProps(state) {
    return { nav: state.nav };
}
export default connect(mapStateToProps)(App);
