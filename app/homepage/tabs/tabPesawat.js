import React, { Component } from 'react'
import { 
    View, FlatList
} from 'react-native'
import {
    Icon, Button, Content, Card, CardItem,
    Tab, Tabs, ScrollableTab, Text, Header, 
    Left, Right, Body,List, ListItem
} from 'native-base'
import { Grid, Col, Row } from 'react-native-easy-grid'

export default class TabPesawat extends Component{
    render(){
        return (
            <View style={{flex:1, padding: 10, backgroundColor: '#eaeaea'}}>
                        <Text style={{fontSize:12}}>E-Tiket Penerbangan</Text>
                            <Grid>
                                <Row size={5}>
                                    <Card>
                                        <CardItem header>
                                            <Text>Belum Ada Pesanan Aktif</Text>
                                        </CardItem>
                                        <CardItem>
                                            <View style={{flexDirection:'row', flex: 1}}>
                                                <View style={{flex: 20}}>

                                                </View>
                                                <View style={{flex: 80}}>
                                                    <Text style={{fontSize:12}}>
                                                        Seluruh pesanan Anda akan muncul di sini. 
                                                        Makin fleksibel mengaturnya dengan masuk ke akun traveloka Anda
                                                    </Text>
                                                </View>
                                            </View>
                                        </CardItem>
                                        <CardItem footer>
                                        <View style={{flexDirection:'row', flex: 1}}>
                                                <View style={{flex: 20}}>
                                                </View>
                                                <View style={{flex: 80, flexDirection: 'row'}}>
                                                   <Button style={{height: 30, width: '50%', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center'}} light>
                                                   <Text>Masuk</Text>
                                                   </Button>
                                                   <Button style={{height: 30, width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                                                   <Text>Daftar</Text>
                                                   </Button>
                                                </View>
                                            </View>
                                        </CardItem>
                                    </Card>
                                </Row>
                                <Col>
                                    <View style={{backgroundColor: '#fff'}}>
                                        <List>
                                            <ListItem icon>
                                                <Left>
                                                <Text>E-Tiket Lama</Text>
                                                </Left>
                                                <Body>
                                                </Body>
                                                <Right>
                                                    <Icon name="ios-arrow-forward" />
                                                </Right>
                                            </ListItem>
                                        </List>
                                   </View>
                               </Col>
                            </Grid>
                        </View>
        )
    }
}
