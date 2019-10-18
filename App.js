import React, { Component } from 'react';
import {View} from 'react-native'
import { Icon, Header } from 'react-native-elements';

export class App extends Component {
  render() {
    return (
      <View>
        <Header
          placement='left'
          leftComponent={{ icon: 'menu', color: 'black' }}
          centerComponent={{ text: 'MY TITLE', style: { color: 'black' } }}
          rightComponent={{ icon: 'home', color: 'black' }}
          containerStyle={{marginTop : -25, justifyContent:'space-around', backgroundColor : '#fff'}}
        />
      </View>
    );
  }
}

export default App;
