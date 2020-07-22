import React, { Component } from 'react'
import {StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container , Button, Text} from 'native-base'
import { connect } from 'react-redux'

import Form from '../components/form';
import { getHotelsByLocations } from '../actions';



class HotelsList extends Component {


  hanldeSearch(value){
      console.log(value)
    this.props.dispatch(getHotelsByLocations(value.name,value.location))
    .then(res =>{
        this.props.navigation.navigate('HotelsList')
    })
  }

  render() {
    return (
      <Container style={styles.container} >
        <Form 
            {...this.props}
            onSubmit={ (value)=> this.hanldeSearch(value)}
        />
      </Container>
    )
  }
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
    backgroundColor: '#ffffff'
  }
})
