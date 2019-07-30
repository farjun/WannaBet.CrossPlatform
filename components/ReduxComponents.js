import {connect} from 'react-redux';

//components

import * as FeedPostBox from './feed/FeedPostBox'

export const FeedPostBoxWrapper = connect(
    FeedPostBox.mapStateToProps,
    FeedPostBox.mapDispatchToProps
)(FeedPostBox.FeedPostBox);

// Screens

import * as FeedScreenCls from '../screens/FeedScreen';

export const FeedScreenWrapper = connect(
    FeedScreenCls.mapStateToProps,
    FeedScreenCls.mapDispatchToProps
)(FeedScreenCls.FeedScreen);

