import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/modules/Login/container/login'
import Main from './src/modules/Main/container/main'

const LoginNavigator = createStackNavigator({
  Login:{
    screen: Login
  },
  Main:{
    screen:Main,
    navigationOptions:{
      title:'Main'
    }
  }
},
{headerLayoutPresent : 'center'});

export default createAppContainer(LoginNavigator)
