import React from 'react';

import { ActivityIndicator, FlatList, Text, View,ul } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      
      <Text style = {{flex: 1, padding: 30,lineHeight: 30, textAlign: 'justify'}}>
        { this.state.persons.map(person => <Text  style = {{flex: 1, padding: 30,lineHeight: 30, textAlign: 'justify'}}>{person.name}</Text>)}
      </Text>
    )
  }
}