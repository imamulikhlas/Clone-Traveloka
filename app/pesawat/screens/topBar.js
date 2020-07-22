import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { Text, View } from 'react-native'
import SearchPesawat from './searchPesawat'
import SearchPesawatHotel from './searchPesawatHotel'

const topTab =  createMaterialTopTabNavigator({
    SearchPesawat : {
        screen : SearchPesawat
    },
    SearchPesawatHotel: {
        screen : SearchPesawatHotel
    }
})


export default topTab
