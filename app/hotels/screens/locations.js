import React, { Component } from 'react'
import { Button, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';


import Form from '../components/form';
import { getListLocations, getLocation, searchByLocations } from '../actions'

class LocationSearch extends Component {

componentWillMount(){
    this.props.dispatch(searchByLocations())
}

handleSearchLocation(value){
    this.props.dispatch(getLocation(value))
    this.props.navigation.navigate('HotelsSearch')
}
  render() {
    return (
      <Container style={styles.container} >
        <Header />
        <Content>
          <Separator bordered>
            <Text>Your Last Search</Text>
          </Separator>
            {this.props.locations.results.map((item, i) => (
            <TouchableNativeFeedback key={i} onPress={() => this.handleSearchLocation(item.name)}>
            <ListItem key={i}>
              <Text>{item.name}</Text>
            </ListItem>
            </TouchableNativeFeedback>
          ))}
        </Content>  
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.hotelsReducer
  }
}

export default connect(mapStateToProps)(LocationSearch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
