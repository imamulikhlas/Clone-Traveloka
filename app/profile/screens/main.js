import React, { Component } from 'react'
import { View } from 'react-native'
import { 
    Card, CardList, Content, ListItem,
    List, Icon, Left, Body, Right, Text
} from 'native-base'
import { Grid, Col, Row } from 'react-native-easy-grid'

import { Styles } from '../assets/styles'

export default class Profile extends Component{
    render(){
        return (
            <View style={Styles.cotainer}>
                <View style={Styles.topProfile}>
                    <View style={Styles.leftTop}>
                        <View style={Styles.containerIcon}>
                        </View>
                    </View>
                    <View style={Styles.midTop}>
                        <Text>Ony Arianto Prapanca</Text>
                        <Text note style={{fontSize: 12}}>onyariantoprapanca@gmail.com</Text>
                    </View>
                    <View style={Styles.rightTop}>
                        <Text style={{fontSize: 15}}>Ubah</Text>
                    </View>
                </View>

                <View style={Styles.cardList}>
                    <List>
                        <ListItem>
                            <Text style={{fontSize:15}}>Traveloka Pay</Text>
                        </ListItem>
                        <ListItem icon>                    
                        <Left>
                            <Icon name='add' />
                        </Left>
                        <Body>
                            <Text style={{fontSize:15}}> Pay Later</Text>
                        </Body>
                        <Right><Text style={{fontSize:15}}>Daftar sekarang</Text></Right>
                        </ListItem>

                        <ListItem icon>
                        <Left>
                            <Icon name='add' />
                        </Left>
                        <Body>
                            <Text style={{fontSize:15}}>Kartu Saya</Text>
                        </Body>
                        <Right><Text style={{fontSize:15}}>Belum ada kartu</Text></Right>
                        </ListItem>
                    </List>
                </View>


                <View style={Styles.cardList}>
                    <ListItem icon>
                        <Left>
                            <Icon name='add' />
                        </Left>
                        <Body>
                            <Text style={{fontSize:15}}>Refund Saya</Text>
                            <Text note style={{fontSize:12}}>Atur Refund Saya di satu tempat</Text >
                        </Body>
                        <Right>
                            <Icon name='ios-arrow-forward'/>
                        </Right>
                    </ListItem>
                    

                    <ListItem icon>
                        <Left>
                            <Icon name='add' />
                        </Left>
                        <Body>
                            <Text style={{fontSize:15}}>Notifikasi Harga</Text>
                            <Text note style={{fontSize:12}}>Notifikasi harga tiket</Text >
                        </Body>
                        <Right>
                            <Icon name='ios-arrow-forward'/>
                        </Right>
                        
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Icon name='add' />
                        </Left>
                        <Body>
                            <Text style={{fontSize:15}}>Passanger Quick Pick</Text>
                            <Text note>Passanger quick pick</Text >
                        </Body>
                        <Right>
                            <Icon name='ios-arrow-forward'/>
                        </Right>
                    </ListItem>
                </View>

                <View style={Styles.cardList}>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name='add' />
                            </Left>
                            <Body>
                               <Text style={{fontSize:15}}> Keluar </Text>
                            </Body>
                            <Right>
                                <Icon name='ios-arrow-forward'/>
                            </Right>
                        </ListItem>
                    </List>
                </View>
            </View>
        )
    }
}

