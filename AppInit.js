import React, { Component } from 'react';
import firebase from '@firebase/app';
import MainStack from './src/components/MainStack';

class AppInit extends Component {
  componentDidMount() {
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD3sshIzuuRkYLmpvvgZjgF1Q8zyK3DSGo",
    authDomain: "instagrin-jc10.firebaseapp.com",
    databaseURL: "https://instagrin-jc10.firebaseio.com",
    projectId: "instagrin-jc10",
    storageBucket: "instagrin-jc10.appspot.com",
    messagingSenderId: "750362090317",
    appId: "1:750362090317:web:4d74905d8d32aed225b504"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  }

  render() {
    return (
      <MainStack />
    )
  }
}

export default AppInit;