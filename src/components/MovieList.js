import React, { Component } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    ActivityIndicator,
    View
} from "react-native";
import { connect } from "react-redux";
import { getListMovie } from "../actions/MovieAction";

class MovieList extends React.Component {
    componentDidMount() {
        this.props.dispatch(getListMovie());
    }

    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({ item, index }) => {
        return (
            <View>
                <Text>{item.title}</Text>
            </View>
        );
    };

    render() {
        const { error, loading, movies } = this.props;

        const spinner = loading ? <ActivityIndicator size="large" /> : null;

        if (error) {
            return <Text> Error! </Text>;
        }
        {
            spinner;
        }
        return (
            <FlatList
                data={movies}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(MovieList);
