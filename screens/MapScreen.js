import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import * as Actions from '../actions/actions';
import {NavigationEvents} from 'react-navigation';
import {View, StyleSheet, Image} from 'react-native';
import {Constants} from 'expo';

export class MapScreen extends React.Component {
    static navigationOptions = {
        title: 'Map',
    };

    render() {
        return (
            < View
        style = {styles.container} >
            < Image
        style = {styles.image}
        source = {
        {
            uri: "https://s-media-cache-ak0.pinimg.com/736x/43/cd/6e/43cd6e82491bf130d97624c198ee1a3f--funny-movie-quotes-funny-movies.jpg"
        }
    }
        resizeMode = "cover"
            / >
            < /View>
    )
        ;
    }
}

const styles = StyleSheet.create({
    ontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
    }
});

export const mapStateToProps = (state) => {
    return {}
};

export const mapDispatchToProps = (dispatch) => {
    return {}
};
