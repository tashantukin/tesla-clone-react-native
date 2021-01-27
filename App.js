import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CartItem from './components/CartItem';

export default function App() {
  return (
    <View style={styles.container}>
      
      <CartItem name={"Model X"}
        tagline={"Order Online For"}
        taglineCTA ={"Touchless Delivery"}
        image={require('./assets/images/Model3.jpeg')}
      
      >
        
      </CartItem>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

 
});
