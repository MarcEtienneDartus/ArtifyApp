// import React, { Component } from 'react'
// import { StyleSheet, View, Button, Dimensions } from 'react-native'
// import { Sketch } from 'expo-pixi';

// const { width, height } = Dimensions.get('window');

// export default class Writing extends Component {

//     state = {
//         image: null,
//         strokeColor: Math.random() * 0xffffff,
//         strokeWidth: Math.random() * 30 + 10,
//       };
    
//       onReady = () => {
//         console.log('ready!');
//       };

//   render() {
//     return (
//         <View
//         style={{
//           flex: 1,
//         }}>
//             <Sketch
//               ref={ref => (this.sketch = ref)}
//               style={{
//                 flex: 1,
//               }}
//               strokeColor={this.state.strokeColor}
//               strokeWidth={this.state.strokeWidth}
//               strokeAlpha={1}
//               onReady={this.onReady}
//             />
//         <Button
//           color={'blue'}
//           title="undo"
//           style={{
//             zIndex: 1,
//             padding: 12,
//             minWidth: 56,
//             minHeight: 48,
//           }}
//           onPress={() => {
//             this.sketch.undo();
//           }}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   listAlphabet:{
//     flex:1,
//     marginLeft: 0.05* width,
//     marginRight: 0.05* width,
//   },
// })

// import {Sketch} from 'expo-pixi';
// import React, { Component } from 'react';
// import {
//   View,
//   Button
// } from 'react-native';

// export default class Writing extends Component {
//   state = {
//     image: null,
//     strokeColor: Math.random() * 0xffffff,
//     strokeWidth: Math.random() * 30 + 10,
//   };

//   onReady = () => {
//     console.log('ready!');
//   };

//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//         }}>
//             <Sketch
//               ref={ref => (this.sketch = ref)}
//               style={{
//                 flex: 1,
//               }}
//               strokeColor={this.state.strokeColor}
//               strokeWidth={this.state.strokeWidth}
//               strokeAlpha={1}
//               onReady={this.onReady}
//             />
//         <Button
//           color={'blue'}
//           title="undo"
//           style={{
//             zIndex: 1,
//             padding: 12,
//             minWidth: 56,
//             minHeight: 48,
//           }}
//           onPress={() => {
//             this.sketch.undo();
//           }}
//         />
//       </View>
//     );
//   }
// }

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import {Sketch} from 'expo-pixi';

export default class App extends Component {
  render() {
    const color = 0xff0000;
    const width = 5;
    const alpha = 0.5;
    return (
      <View style={styles.container}>
          <Sketch
						strokeColor={color}
						strokeWidth={width}
						strokeAlpha={alpha}
						style={{ flex: 1 }}
					/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#00AAFF',
  }
});

