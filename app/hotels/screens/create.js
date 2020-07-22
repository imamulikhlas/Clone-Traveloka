import React, { Component } from 'react'
import { Button, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container } from 'native-base'
import { connect } from 'react-redux'

import Form from '../components/form';
import { createHotels } from '../actions'

class TodoCreate extends Component {

  constructor() {
    super();
  }

  handleCreate(value){
    this.props.dispatch(createHotels(value))
    .then(res => {
      this.props.navigation.goBack();
    })
    .catch(err => {
      alert('Error');
    })
  }

  render() {
    return (
      <Container style={styles.container} >
        <Form
          {...this.props}
          onSubmit={this.handleCreate.bind(this)}
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

export default connect(mapStateToProps)(TodoCreate);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
