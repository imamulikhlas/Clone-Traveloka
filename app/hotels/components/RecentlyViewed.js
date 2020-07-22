import React, { Component } from 'react'
import { Icon } from 'native-base'
import { View, Text} from 'react-native'

export default class RecentlyViewed extends Component {
    render(){
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Icon name='ios-search' style={{right: 20, color: '#2B9FDC'}} />
                <Text style={{color: '#2B9FDC', fontWeight:'bold'}}>Recently Viewed</Text>
            </View>
        )
    }
}