import React, { Component } from 'react'
import { Icon } from 'native-base'
import { View, Text} from 'react-native'

export default class PriceWatch extends Component {
    render(){
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Icon name='ios-notifications-outline' style={{right: 20, color: '#2B9FDC', fontWeight:'bold'}} />
                <Text style={{color: '#2B9FDC', fontWeight:'bold'}}>PriceWatch</Text>
            </View>
        )
    }
}