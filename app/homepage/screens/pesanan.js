import React, { Component } from 'react'
import { 
    View, FlatList
} from 'react-native'
import {
    Icon, Button, Content, Card, CardItem,
    Tab, Tabs, ScrollableTab, Text, Header, 
    Left, Right, Body
} from 'native-base'
import { Grid, Col, Row } from 'react-native-easy-grid'


import TabPesawat from '../tabs/tabPesawat'
import {styles} from '../assets/pesananStyle'

export default class Pesanan extends Component {
  render() {
    return (
        <View style={styles.container}>
{/*========== Daftar Pembelian Button ==================== */}
            <View style={styles.daftarPembelian}>

            </View>
{/*========== Daftar Pembelian Button ==================== */}
                <Tabs renderTabBar={()=> <ScrollableTab />}>
                    <Tab heading="Tab1">
                        <TabPesawat />
                    </Tab>
                    <Tab heading="Tab1">
                        <TabPesawat />
                    </Tab>
                    <Tab heading="Tab1">
                        <TabPesawat />
                    </Tab>
                    <Tab heading="Tab1">
                        <TabPesawat />
                    </Tab>
                    <Tab heading="Tab1">
                        <TabPesawat />
                    </Tab>
                </Tabs>
        </View>
    )
  }
}
