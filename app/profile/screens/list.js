import React, { Component } from 'react'
import {
  Container, Text, Content, List,
  ListItem, Fab, Body, Right,
  Form, Input, Icon
} from 'native-base';
import { Button, View, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import axios from 'axios';

import { allProfiles } from '../actions';
import Item from '../components/item';

class ProfilesList extends Component {

  state = {selected: (new Map(): Map<string, boolean>)};

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch(allProfiles());
  }

  handleCreate(){
    this.props.navigation.navigate('ProfilesCreate')
  }

  render() {
    return (
      <Container style={styles.container}>
        <FlatList
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          data={this.props.profiles.results}
          renderItem={this._renderItem}
          refreshing={this.props.profiles.isLoading}
          onRefresh={this.getData}
        />
        <Fab onPress={()=> this.handleCreate()} >
          <Icon name="add" />
        </Fab>
      </Container>
    )
  }

  _renderItem = ({item}) => <Item item={item} />

  _keyExtractor = (item, index) => item.id.toString();

}

const mapStateToProps = (state) => {
  return {
    profiles: state.profilesReducer
  }
}

export default connect(mapStateToProps)(ProfilesList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
