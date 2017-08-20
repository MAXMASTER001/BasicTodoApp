import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import  Header from './src/Header';
import  Input from './src/Input';
import  List from './src/List';

export default class App extends React.Component {
 state = {
      todos: ['yemek yap']
    }
constructor() {
    super();
    
}



addItem(text) {
const { todos } = this.state

this.setState({todos: [...todos, text]})

}
removeItem = (index) => {
  const {todos} = this.state
  this.setState({
    todos: todos.filter((todo,i)=> i!=index)
  })
}
  render() {
    const {todos} = this.state
    return (
      <View style={styles.container}>
       <Header>Yapılacaklar</Header>
       <Input
       onSubmitEditing={this.addItem.bind(this)}
       />
       <List 
       list={todos}
       onPressItem={this.removeItem}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
  
  },
});
