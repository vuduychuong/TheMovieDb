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

class App extends React.Component {
    render() {
        console.log(this.props);
        return <Home />;
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
    return { value: state.value };
}
export default connect(mapStateToProps)(App);
