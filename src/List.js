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

const styles = {
    text: {
        color: 'white',
        fontSize: 25,
        padding:5,
        margin:5,
        backgroundColor: '#8e44ad'
    }
}