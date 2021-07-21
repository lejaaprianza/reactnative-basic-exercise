import React, {Component} from 'react';
import {View, Text} from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontStyle: 'normal',
            textAlign: 'right',
            letterSpacing: 5,
          }}>
          <Text style={{color: 'red', fontSize: 28}}>Hello </Text>
          <Text>World</Text>
        </Text>
      </View>
    );
  }
}

export default App;
