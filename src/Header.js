import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends Component {
  
    render () {

    const { children } = this.props

        return (
         
            <View style={styles.container}>
                <Text style={styles.text}>
                    { children }
                </Text>
            </View>



        );
    }

}

const styles = StyleSheet.create({
   container: {
       padding:10,
       backgroundColor:'#2ecc71'
   },
    text: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center'

    }
});