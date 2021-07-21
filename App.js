// basic
// import React, {Component} from 'react';
// import {Text, View} from 'react-native';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <View>
//         <Text
//           style={{
//             fontWeight: 'bold',
//             fontStyle: 'italic',
//             fontSize: 20,
//             textAlign: 'center',
//             letterSpacing: 5,
//             color: 'blue',
//           }}>
//           Hello World
//         </Text>
//         <Text>tes</Text>
//       </View>
//     );
//   }
// }

// export default App;

//functional component
import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const App = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = useState('This is not really a bird nest.');

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;

//Class Componenet
// import React, {Component} from 'react';
// import {Text, StyleSheet} from 'react-native';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       titleText: "Bird's Nest",
//       bodyText: 'This is not really a bird nest.',
//     };
//   }

//   onPressTitle = () => {
//     this.setState({titleText: "Bird's Nest [pressed]"});
//   };

//   render() {
//     return (
//       <Text style={styles.baseText}>
//         <Text style={styles.titleText} onPress={this.onPressTitle}>
//           {this.state.titleText}
//           {'\n'}
//           {'\n'}
//         </Text>
//         <Text numberOfLines={5}>{this.state.bodyText}</Text>
//       </Text>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   baseText: {
//     fontFamily: 'Cochin',
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default App;
