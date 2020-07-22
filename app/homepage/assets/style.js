import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    profile : {
        // backgroundColor: '#3498db',
        backgroundColor: 'white',
        paddingHorizontal: 30,
        // width: width * 1,
        // height: height * 0.12
    },
    mainMenu: {
        backgroundColor: 'white',
        width: width * 1,
        height : height* 0.3,
        padding: 5
    },
    scrollMenu : {
        width: width * 1,
        height: height * 0.1,
    },
    containerIcon : {
        backgroundColor: '#e74c3c',
        width: 40, 
        height: 40, 
        borderRadius: 25, 
        justifyContent: 'center', 
        alignItems : 'center'
    },
    textMenu : {
        fontSize: 11, 
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    colMenu : {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    containerIconText : {
        flex: 2,  
        alignItems: 'center', 
        justifyContent:'flex-end',
    },
    containerTextMenu : {
        height: 30,
    },
    containerIconScroll : {
        height: '50%',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    containerTextScroll : {
        height: '50%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: 100
    },
    blankSpace : {
        backgroundColor: '#fff',
        flex: 1
    },
    blankSpace2 : {
        paddingVertical: 20, 
        paddingHorizontal: 15, 
        backgroundColor: '#3498db', 
        marginVertical: 20 
    },
    buttonLokasi : {
        height: 30, 
        paddingHorizontal: 10, 
        borderRadius: 5, 
        top: 5
    }
})

export { styles }