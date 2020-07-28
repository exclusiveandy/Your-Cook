/*Example of SQLite Database in React Native*/
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './pages/HomeScreen';

import Stew from './pages/Stew';
import Vegie from './pages/Vegie';
import Seafood from './pages/Seafood';
import Noodle from './pages/Noodle';
import Soup from './pages/Soup';
import Dessert from './pages/Dessert';


import Adobo from './pages/dishes/stew/Adobo';
import Afritada from './pages/dishes/stew/Afritada';
import Sinigang from './pages/dishes/stew/Sinigang';
import BicolExpress from './pages/dishes/stew/BicolExpress';
import PorkSteak from './pages/dishes/stew/PorkSteak';

import Monggo from './pages/dishes/vegie/Monggo';
import Pinakbet from './pages/dishes/vegie/Pinakbet';
import Chopsuey from './pages/dishes/vegie/Chopsuey';
import Ampalaya from './pages/dishes/vegie/Ampalaya';

import Pusit from './pages/dishes/seafood/Pusit';

import Bihon from './pages/dishes/noodle/Bihon';
import Spaghetti from './pages/dishes/noodle/Spaghetti';

import Bulalo from './pages/dishes/soup/Bulalo';
import Nilaga from './pages/dishes/soup/Nilaga';
import Tinola from './pages/dishes/soup/Tinola';


import HaloHalo from './pages/dishes/dessert/HaloHalo';
import Biko from './pages/dishes/dessert/Biko';
import Leche from './pages/dishes/dessert/Leche';
import Maja from './pages/dishes/dessert/Maja';



const RootStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Stew: {
    screen: Stew,
    navigationOptions: {
      title: 'Stew Dishes',
      headerStyle: { backgroundColor: '#cc3e3e' },
      headerTintColor: '#ffffff',
    }, 
  },
  Vegie: {
    screen: Vegie,
    navigationOptions: {
      title: 'Vegetables Dishes',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Seafood: {
    screen: Seafood,
    navigationOptions: {
      title: 'Seafood Dishes',
      headerStyle: { backgroundColor: '#3797bf' },
      headerTintColor: '#ffffff',
    },
  },  
  Noodle: {
    screen: Noodle,
    navigationOptions: {
      title: 'Noodle Dishes',
      headerStyle: { backgroundColor: '#CD853F' },
      headerTintColor: '#ffffff',
    },
  },
  Soup: {
    screen: Soup,
    navigationOptions: {
      title: 'Soup Dishes',
      headerStyle: { backgroundColor: '#d0681c' },
      headerTintColor: '#ffffff',
    },
  },
  Dessert: {
    screen: Dessert,
    navigationOptions: {
      title: 'Desserts',
      headerStyle: { backgroundColor: '#e445db' },
      headerTintColor: '#ffffff',
    },
  },
  Adobo: {
    screen: Adobo,
    navigationOptions: {
      title: 'Pork Adobo',
      headerStyle: { backgroundColor: '#cc3e3e' },
      headerTintColor: '#ffffff',
    },
  },
  Afritada: {
    screen: Afritada,
    navigationOptions: {
      title: 'Chicken Afritada',
      headerStyle: { backgroundColor: '#cc3e3e' },
      headerTintColor: '#ffffff',
    },
  },
  Sinigang: {
    screen: Sinigang,
    navigationOptions: {
      title: 'Pork Sinigang',
      headerStyle: { backgroundColor: '#cc3e3e' },
      headerTintColor: '#ffffff',
    },
  },
  BicolExpress: {
    screen: BicolExpress,
    navigationOptions: {
      title: 'Bicol Express',
      headerStyle: { backgroundColor: '#cc3e3e' },
      headerTintColor: '#ffffff',
    },
  },
  PorkSteak: {
    screen: PorkSteak,
    navigationOptions: {
      title: 'Pork Steak',
      headerStyle: { backgroundColor: '#cc3e3e' },
      headerTintColor: '#ffffff',
    },
  },
  Monggo: {
    screen: Monggo,
    navigationOptions: {
      title: 'Monggo',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Pinakbet: {
    screen: Pinakbet,
    navigationOptions: {
      title: 'Pinakbet',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Chopsuey: {
    screen: Chopsuey,
    navigationOptions: {
      title: 'Chopsuey',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Ampalaya: {
    screen: Ampalaya,
    navigationOptions: {
      title: 'Ginisang Ampalaya',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Pusit: {
    screen: Pusit,
    navigationOptions: {
      title: 'Squid Adobo',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Bihon: {
    screen: Bihon,
    navigationOptions: {
      title: 'Pansit Bihon',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Spaghetti: {
    screen: Spaghetti,
    navigationOptions: {
      title: 'Filipino Style Spaghetti',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Bulalo: {
    screen: Bulalo,
    navigationOptions: {
      title: 'Bulalo',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Nilaga: {
    screen: Nilaga,
    navigationOptions: {
      title: 'Nilagang Baboy',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Tinola: {
    screen: Tinola,
    navigationOptions: {
      title: 'Chicken Tinola',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  HaloHalo: {
    screen: HaloHalo,
    navigationOptions: {
      title: 'Halo - Halo',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Biko: {
    screen: Biko,
    navigationOptions: {
      title: 'Biko',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Leche: {
    screen: Leche,
    navigationOptions: {
      title: 'Leche Flan',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },
  Maja: {
    screen: Maja,
    navigationOptions: {
      title: 'Maja Blanca',
      headerStyle: { backgroundColor: '#46b555' },
      headerTintColor: '#ffffff',
    },
  },


});

const App = createAppContainer(RootStack);

export default App;
