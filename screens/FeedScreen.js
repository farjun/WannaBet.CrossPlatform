import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Constants} from 'expo';
import * as ReduxComponents from "../components/ReduxComponents"

export class FeedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <ReduxComponents.FeedPostBoxWrapper/>
        );
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
