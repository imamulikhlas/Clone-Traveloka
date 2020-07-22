import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    container : {
        backgroundColor : '#e74c3c',
        flex: 1,
    },
    daftarPembelian : {
        backgroundColor: 'red',
        paddingHorizontal: 30,
        width: width * 1,
        height: height * 0.15,
        padding: 20
    },

})

export { styles }