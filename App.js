import React, { Component } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  onPress = () => {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random');
    const json = await response.json();
    this.setState({ data: json.message })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{this.state.data}</Text>
        <Button 
        style={styles.button}
        title="Get Quote" onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    padding: 40,
  },
});
