import React, { Component } from 'react'
import {StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container , Button, Text, Icon, Content} from 'native-base'
import { connect } from 'react-redux'

import Form from '../components/form';
import { getHotelsByLocations } from '../actions';
import { Grid, Col, Row } from 'react-native-easy-grid'
import { ScrollView, View } from 'react-native'


import RecentlyViewed  from '../components/RecentlyViewed'
import PriceWatch from '../components/priceWatch'
import MainSearch from '../components/mainSearch'


class HotelsSearch extends Component {

  hanldeSearch(value){
      console.log(value)
    this.props.dispatch(getHotelsByLocations(value.location))
    .then(res =>{
        this.props.navigation.navigate('HotelsList')
    })
  }

  render() {
    return (
      <Container style={styles.container} >
        <Content>        
        <Grid>
            {/*top Grid*/}
            <Row size={2}>

                {/* {split top grid} */}
                <Grid style={{backgroundColor: '#eaeaea'}}>
                    <Row size={4} style={{justifyContent: 'center', alignItems: 'center', height: 50}}>
                        <View style={{marginRight: 30}}>
                            <Icon name='add' />
                        </View>
                        <View>
                            <Text note>Log In or Register to starat earnung Points!</Text>
                        </View>
                        <View style={{marginLeft: 30}}>
                            <Icon name='ios-arrow-forward-outline' />
                        </View>
                    </Row>
                    <Row size={4} style={{backgroundColor: '#FFF', height: 50}}>
                        {/* {split top grid bottom} */}
                        <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                            <RecentlyViewed />
                        </Col>
                        <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                            <PriceWatch k/>
                        </Col>
                    </Row>
                    <Row style={{backgroundColor: '#eaeaea', height: 10}}></Row>
                </Grid>
            </Row>
            <Row style={{paddingVertical: 10}}>
                {/* {mid item} */}
                
                <MainSearch {...this.props} />
            </Row>
            <Row size={1} style={{backgroundColor: '#eaeaeaea', paddingTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex:1, backgroundColor: 'white'}}>
                        <View style={{flex:1, height:55, flexDirection: 'row'}}>
                            <View style={{flex:1, height:55, justifyContent: 'center', alignItems: 'center'}}>
                                <Icon name='add' />
                            </View>
                            <View style={{flex:9, height:55}}>
                                <View style={{flex:1, height:25, alignItems: 'flex-end', flexDirection: 'row'}}>
                                    <Text >Need a place to stay tonight?</Text>
                                </View>
                                <View style={{flex:1, height:25}}>
                                <Text note>Find best-value hotels around you</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:1, height:50, backgroundColor: 'yellow'}}></View>
                </View>
            </Row>
        </Grid>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      hotels: state.hotelsReducer
    }
  }
  
  export default connect(mapStateToProps)(HotelsSearch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
