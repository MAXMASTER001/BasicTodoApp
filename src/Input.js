import React, { Component } from 'react'
import { TextInput } from 'react-native'

export default class  Input extends Component {
state={text:''}

onChangeText(text) {
    this.setState( {text})
}
onSubmitEditing() {
    const { onSubmitEditing } = this.props
    if (!this.state.text ) return
    onSubmitEditing(this.state.text)
    this.setState({text:''})
 
}

render () {

    

    return (
        <TextInput
        placeholder='bir iş yazın'
        style={styles.TextInput}
        value={this.state.text}
        onChangeText={this.onChangeText.bind(this)}
        onSubmitEditing={this.onSubmitEditing.bind(this)}
         
        />
    )
}


}
const styles= {
    TextInput: {
        marginTop:20,
        fontSize:50,
        height: 50
    }
}