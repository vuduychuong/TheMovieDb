import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MovieList from "../components/MovieList";
import { connect } from "react-redux";

class Home extends React.Component {
    render() {
        return <MovieList />;
    }
}

export default connect()(Home);
