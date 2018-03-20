import React, { Component } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    ActivityIndicator,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { ActionTypes } from "../constants/ActionTypes";
import { getListMovie, showDetailMovie } from "../actions/MovieAction";
import { BASE_IMAGE_URL } from "../actions/url";

class MovieList extends React.Component {
    componentDidMount() {
        this.props.dispatch(getListMovie());
    }

    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({ item, index }) => {
        return (
            <ListItem
                item={item}
                index={index}
                onPressItem={this._onPressItem}
            />
        );
    };

    _onPressItem = (item, index) => {
        this.props.dispatch(showDetailMovie(item));
    };

    render() {
        const { error, loading, movies } = this.props;

        if (error) {
            return <Text> Error! </Text>;
        }
        return loading ? (
            <ActivityIndicator size="large" />
        ) : (
            <FlatList
                data={movies}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

class ListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.item, this.props.index);
    };

    render() {
        const item = this.props.item;
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.itemContainer}>
                    <Image
                        style={styles.itemImage}
                        source={{ uri: `${BASE_IMAGE_URL + item.poster_path}` }}
                    />
                    <View style={styles.itemRight}>
                        <Text style={styles.itemYear}>{item.release_date}</Text>
                        <Text style={styles.itemName}>{item.title}</Text>
                        <Text style={styles.itemType}>{item.title}</Text>
                        <Text style={styles.itemRate}>{item.vote_average}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 10,
        flexDirection: "row",
    },
    itemImage: {
        width: 80,
        height: 110,
        resizeMode: "contain"
    },
    itemRight: {
        flex: 1,
        justifyContent: "space-around",
        marginLeft: 10,
    },
    itemYear: {
        color: "grey",
        fontSize: 9
    },
    itemName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    itemRate: {
        color: "blue",
        fontSize: 15
    }
});

const mapStateToProps = state => ({
    movies: state.movies,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(MovieList);
