import React, { Component } from 'react'
import { StyleSheet , Dimensions} from 'react-native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#eaeaea'
    },
    topProfile : {
        height: height * 0.15,
        width : width,
        backgroundColor: '#fff',
        flexDirection : 'row'
    },
    cardList : {
        
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal : 5
    },
    leftTop: {
        flex : 2,
        
        justifyContent : 'center',
        alignItems: 'center'
    },
    midTop : {
        flex : 7,
        
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    rightTop : {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    containerIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#eaeaea'
    }
})

export { Styles }