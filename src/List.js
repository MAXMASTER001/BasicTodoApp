import React, { Component } from 'react'
import { TouchableHighlight, Text, View } from 'react-native'

export default class List extends Component {


    renderItem = (item, i) => {
    
        const {onPressItem} =this.props

        return (
            <TouchableHighlight
            key= {i}
            
            onPress= {()=>onPressItem(i)}
            >
                <Text
                style={styles.text}
                >{item}</Text>

            </TouchableHighlight>
        )

    }

    render() {
        const { list } = this.props
        return (
           <View>
               {list.map(this.renderItem)}
           </View>
        )

    }
}
let randomHex = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const colors = ['#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e']
const styles = {
    text: {
        color: 'white',
        fontSize: 25,
        padding:5,
        margin:5,
        backgroundColor: randomHex()
    }
}