import React, { Component } from 'react'
import {
  Container, Text, Content, List,
  ListItem, Fab, Body, Right,
  Form, Input, Icon
} from 'native-base';
import { Button, View, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'


import Item  from '../components/item.js'


class HotelsList extends Component {
  
  state = {selected: (new Map(): Map<string, boolean>)};

  render() {
    return (
      <Container style={styles.container}>
        <Content style={{padding:10}}>
        <FlatList 
            extraData={this.state}
            data={this.props.hotels.results}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            refreshing={this.props.hotels.isLoading}
        />
        </Content>
      </Container>
    )
  }

  _renderItem = ({item}) => <Item item={item} />

  _keyExtractor = (item, index) => item.id;

}


const mapStateToProps = (state) => {
  return {
    hotels: state.hotelsReducer
  }
}

export default connect(mapStateToProps)(HotelsList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})