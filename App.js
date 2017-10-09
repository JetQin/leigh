import Dashboard from './src/Dashboard'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//         <View>
//           <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//           <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//           <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//         </View>
//         <View style={{flex: 1, flexDirection: 'row'}}>
//           <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//           <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//           <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//         </View>
//         <View style={{ flex: 1,flexDirection: 'column', justifyContent: 'space-between',}}>
//             <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//             <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//             <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//         </View>
//         <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
//           <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//           <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//           <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
// AppRegistry.registerComponent('App', () => App);

export default class App extends React.Component {
  render() {
      return ( 
        <View>
            <Dashboard/>
        </View>
    );
  }
}