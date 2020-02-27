// Padarytas 1 pamokos darbas

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// 2 pamoka

const Weather = ({ weather, temperature }) => {
  if (weather != null) {
    return (
      <View>
        
      
        <View>
          
          
          
          
        </View>
        <View >
         
         
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Oh no, something went wrong</Text>
      </View>
    )
  };
};



export default Weather;
