import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) =>
{
    
    const type = props.type;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFFA6' : '#171A20';
    // console.warn(type);
    return (

        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={()=>
                {
                    console.warn('hey there')
                }} 
            >
                <Text style={[styles.text, {color: textColor }]}>Custom Order</Text>

          </Pressable>
        
      </View>
    )
}

export default StyledButton;