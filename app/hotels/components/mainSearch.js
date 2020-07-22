import React, { Component } from 'react'
import { 
    Icon, List, ListItem, 
    Input, Label, Left, Body,
    Right, Item, Container, Button,
    Form as FormNB
} from 'native-base'
import { View, Text, TouchableNativeFeedback} from 'react-native'
import { 
    Row, Col, Grid
 } from 'react-native-easy-grid'
 import { connect } from 'react-redux'

import { Field, reduxForm, formValueSelector } from 'redux-form'
import { StackActions } from 'react-navigation';
import { getListLocations, getLocation, getHotelsByLocations } from '../actions';

class MainSearch extends Component {

    componentDidMount(){
      this.props.dispatch(getLocation())
    }

    handleSearch = () => {
        this.props.navigation.navigate('LocationsSearch')
    }
    handleSearchHotel(value){
      this.props.dispatch(getHotelsByLocations(this.props.locations.location))
      .then(res =>{
        this.props.navigation.navigate('HotelsList')
    }).catch(err =>{
        alert('Network Error')
    })
    
}
    render(){
        return (
                
                    <Grid>
                    {/* {destination-start} */}
                    <Row>
                        <Col style={{flexDirection: 'row'}}>
                            <View style={{flex:1, alignItems: 'center'}}>
                                <Icon name='ios-pin-outline' style={{fontSize:30, color: 'grey'}} />
                            </View>
                        </Col>
                        <Col size={6} style={{paddingHorizontal:"1%", flexDirection: 'row'}}>
                            <Grid>
                                
                                <Row>
                                    <Text note style={{fontSize:11}}>
                                        Destination
                                    </Text>
                                </Row>
                                
                                <TouchableNativeFeedback onPress={this.handleSearch}>
                                <Row size={1.5} style={{borderBottomWidth: 2}}>
                                    <Text note style={{fontSize:15}}>
                                        {this.props.locations.location}
                                    </Text>
                                </Row>
                                </TouchableNativeFeedback>

                            </Grid>
                        </Col>
                        <Col style={{flexDirection:'row', alignItems: 'flex-end'}}>
                            <View style={{ 
                                width: 30, 
                                height: 30, 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                padding: 5,
                                maxHeight: 50,
                                maxWidth: 50
                                 }}>
                                <Icon name='ios-locate-outline' style={{fontSize: 20, color: 'grey'}} />
                            </View>
                        </Col>
                    </Row>
                    {/* {destination-end} */}



                    {/* {check-in start} */}

                    <Row  style={{paddingVertical: 20}}>
                        <Col style={{paddingVertical : 10, flexDirection: 'row'}}>
                            <View style={{flex:1, alignItems: 'center'}}>
                                <Icon name='ios-calendar-outline' style={{color: 'grey', fontSize: 30}} />
                            </View>
                        </Col>
                        <Col size={3.5} style={{paddingLeft:"2%", flexDirection: 'row'}}>
                            <Grid>
                                <Row>
                                    <Text note style={{fontSize:11}}>
                                        Check-in Date
                                    </Text>
                                </Row>
                                <Row size={1.5} style={{borderBottomWidth: 2}}>
                                    <Text note style={{fontSize:15}}>
                                        Thu, 7 Jun 2018
                                    </Text>
                                </Row>
                                <Row size={0.1}>
                                    <Text style={{fontSize:11}}>Check-Out:</Text>
                                </Row>
                            </Grid>
                        </Col>
                        <Col size={3.5} style={{paddingRight: '4.3%', paddingLeft: '5%'}}>
                            <Grid>
                                <Row>
                                    <Text note style={{fontSize:11}}>
                                        Duration
                                    </Text>
                                </Row>
                                <Row size={1.5} style={{ borderBottomWidth: 2}}>
                                    <Text note style={{fontSize:15}}>
                                        1 night(s)
                                    </Text>
                                </Row>
                                <Row>
                                    <View style={{height:15}}></View>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>

                    {/* {check-in end} */}
                    
                    {/* {check-out start} */}
                    {/* {checkout end} */}

                    {/* {Guest start} */}
                    <Row  style={{paddingVertical: 20}}>
                        <Col style={{paddingVertical : 10, flexDirection: 'row'}}>
                            <View style={{flex:1, alignItems: 'center'}}>
                                <Icon name='ios-contacts-outline' />
                            </View>
                        </Col>
                        <Col size={7.5} style={{flexDirection: 'row', paddingRight: 20}}>
                            <Grid>
                                <Row>
                                    <Text note style={{fontSize:11}}>
                                        Total Guests & Rooms
                                    </Text>
                                </Row>
                                <Row size={1.5} style={{borderBottomWidth: 2}}>
                                    <Text note style={{fontSize:15}}>
                                        Guest(s) and Room(s)
                                    </Text>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>
                    {/* {Guest end} */}
                    
                    {/* {Filters start} */}
                    <Row  style={{paddingVertical: 5}}>
                        <Col style={{paddingVertical : 5, flexDirection: 'row'}}>
                            <View style={{flex:1, alignItems: 'center'}}>
                                <Icon name='md-options' style={{color: 'grey', fontSize: 25}} />
                            </View>
                        </Col>
                        <Col size={7.5} style={{paddingHorizontal:"1%", flexDirection: 'row',  paddingRight: 20}}>
                            <Grid>
                                <Row>
                                    <Text note style={{fontSize:11}}>
                                        Filters (Stars, Price & Pay at Hotel)
                                    </Text>
                                </Row>
                                <Row size={1.5} style={{borderBottomWidth: 2}}>
                                    <Text note style={{fontSize:15}}>
                                        No preference
                                    </Text>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>
                    {/* {filters end} */}

                    {/* {Button search start} */}
                    <Row >
                        <Col size={0.5} style={{padding: 10}}></Col>
                        <Col size={7.5} style={{padding: 10}}>
                            <View style={{flex:1}}>
                                <Button full onPress={() => this.handleSearchHotel()} style={{backgroundColor:'#ff9000'}}>
                                    <Text>Search</Text>
                                </Button>
                            </View>
                        </Col>
                        <Col size={2.5} style={{padding: 10}}>
                            <View>
                                <Button light full>
                                    <Icon name='md-map' style={{color: '#2B9FDC'}} />
                                </Button>
                            </View>
                        </Col>
                    </Row>
                    {/* {Button search end} */}
                    
                </Grid>

        )
    }
}

const mapStateToProps = (state) => {
    return {
      locations : state.hotelsReducer
    }
  }
  export default connect(mapStateToProps)(MainSearch);