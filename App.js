import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList
} from 'react-native';
import { Card, Button, ListItem } from 'react-native-elements';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movieData: []
    }
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/rockia/4ee9574cfea568015e69ed655265d212/raw/e75e2388ac4a08fd5df82716a283d3abbed57014/movieData').then((res) => {
      this.setState({ movieData: res.data });
    });
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.movieData}
          keyExtractor={(item, index) => String(item.id)}
          renderItem={({ item }) => <Card
            key={String(item.id)}
            title={item.title}
            image={{ uri: `https://image.tmdb.org/t/p/w600${item.backdrop_path}` }}
          ><Text>{item.overview}</Text></Card>}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App;
