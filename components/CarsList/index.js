import React from 'react'
import { View, Text, FlatList,Dimensions } from 'react-native';
import CarItem from "../CartItem";


import styles from './styles';
import cars from './cars';
import CartItem from '../CartItem';

const CarsList = (props) => {
    return (
        <View style={styles.container}>

            <FlatList
                data={cars}
                renderItem={({ item }) => <CartItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            > 
            </FlatList>
        </View>
    )
}
export default CarsList;