import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import  Homepage  from './homepage'
import { NavigationAction } from 'react-navigation'
import { connect } from 'react-redux'
import Pesanan from './pesanan'
import Profile from '../../profile/screens/main'

class HomeScreen extends React.Component {
  render() {
    return (
     
        <Homepage {...this.props} />
     
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <Pesanan />
    );
  }
}

class ProfileScreen extends React.Component{
  render(){
    return(
      <Profile />
    )
  }
}

export default createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Profile : ProfileScreen
});