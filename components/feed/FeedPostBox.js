import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Constants} from 'expo';
import AwesomeButton from "react-native-really-awesome-button";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: 'flex-start',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    textImage: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },

});


export class FeedPostBox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textImage}>
                    <Image
                        style={styles.image}
                        source={{uri: "https://s-media-cache-ak0.pinimg.com/736x/43/cd/6e/43cd6e82491bf130d97624c198ee1a3f--funny-movie-quotes-funny-movies.jpg"}}
                        resizeMode="cover"
                    />
                    <Text style={{fontWeight: 'bold', fontSize: 12}}>
                        Username
                    </Text>
                </View>
                <View style={styles.textImage}>
                    <Text style={{fontWeight: 'bold'}}>
                        Wanna Bet?
                    </Text>
                </View>
                <AwesomeButton
                    progress
                    onPress={next => {
                        /** Do Something **/
                        next();
                    }}
                >
                    Text
                </AwesomeButton>
            </View>
        );
    }
}


export const mapStateToProps = (state) => {
    return {}
};

export const mapDispatchToProps = (dispatch) => {
    return {}
};
