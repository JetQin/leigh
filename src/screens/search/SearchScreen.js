import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';

class SearchScreen extends Component {
  render() {
    return (
      <View>
        <SearchBar
          lightTheme
          onChangeText={this.search}
          placeholder='Type Here...'
        />
      </View>
    );
  }
}

export default SearchScreen;
