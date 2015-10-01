/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var screen = require('Dimensions').get('window');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} = React;

var ReactNativeXkcd = React.createClass({
  getInitialState: function() {
      return {
        comic: 'http://www.dhp11.com/foswiki/pub/Internal/2012-06-12/spinner.gif',
        title: ''
      };
  },
  componentDidMount: function() {
    fetch('http://xkcd-imgs.herokuapp.com/')
       .then((data) => data.json())
       .then((data) => {
            this.setState({comic: data.url})
            this.setState({title: data.title})
        })
       .done();
  },
  render: function() {
    return (
        <View style={styles.comicContainer}>
            <Image style={styles.comic} source={{uri: this.state.comic}} />
            <Text>{this.state.title}</Text>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  comicContainer: {
    flex: 1,
    overflow: 'hidden'
  },
  comic: {
    justifyContent: 'center',
    alignItems: 'center',
    height: screen.height - 200,
    width: screen.width,
    resizeMode: 'contain',
    padding: 1,
    marginBottom: 30,
    marginTop: 30
  }
});


AppRegistry.registerComponent('ReactNativeXkcd', () => ReactNativeXkcd);
