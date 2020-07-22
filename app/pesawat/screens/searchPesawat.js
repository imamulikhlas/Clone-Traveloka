import React, { Component } from 'react'
import { 
    Icon, Button , List, ListItem,
    Card, CardItem, Container, Text,
    Left, Right, Body, Accordion, Content
} from 'native-base'

import Collapsible from 'react-native-collapsible'

import { Grid, Col, Row } from 'react-native-easy-grid'
import { 
    View, TouchableWithoutFeedback
} from 'react-native' 

import {Styles, height, width} from '../assets/styles'

export default class SearchPesawat extends Component {

    state = {
        activeSection: false,
        collapsed: true
    };

    _toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    render() {
        return (
            <Container>
                <View style={Styles.contents}>
                <List>
                    <ListItem icon style={{width: width * 0.8}}>
                        <Left>
                            <Icon name='add' />
                        </Left>
                        <Body>
                            <Text note style={{fontSize: 12}}>Kota Asal</Text>
                            <Text> Jakarta </Text>
                        </Body>
                        <Right>
                        </Right>
                    </ListItem>

                    <View style={{height : height  * 0.1, zIndex:   99, position: 'absolute', top: 30, alignSelf: 'flex-end', width: width * 0.1}}>
                            <Icon type='FontAwesome' name='home' />
                    </View>

                        <ListItem icon>
                        <Left>
                            <Icon name='add' />
                        </Left>
                        <Body>
                            <Text note style={{fontSize: 12}}>Kota Tujuan</Text>
                            <Text> Jakarta </Text>
                        </Body>
                        <Right>
                        </Right>
                    </ListItem> 

                        <ListItem icon>
                        <Left>
                            <Icon name='add' />
                        </Left>
                        <Body>
                            <Text note style={{fontSize: 12}}>Tanggal Berangkat</Text>
                            <Text> Jakarta </Text>
                        </Body>
                        <Right>
                        </Right>
                    </ListItem>

                        <ListItem icon>
                        <Left>
                            <Icon name='add' />
                        </Left>
                        <Body>
                            <Text note style={{fontSize: 12}}>Penumpang</Text>
                            <Text> Jakarta </Text>
                        </Body>
                        <Right>
                        </Right>
                    </ListItem>

                        <ListItem icon>
                        <Left>
                            <Icon name='add' />
                        </Left>
                        <Body>
                            <Text note style={{fontSize: 12}}>Kelas Penerbangan</Text>
                            <Text> Jakarta </Text>
                        </Body>
                        <Right>
                        </Right>
                    </ListItem>

                    <TouchableWithoutFeedback onPress={this._toggleExpanded}>
                        <Text>
                            Pilihan Lainya
                        </Text>
                    </TouchableWithoutFeedback>

                    <Collapsible collapsed={this.state.collapsed}>
                    <ListItem icon>
                        <Left>
                            <Icon name='add' />
                        </Left>
                        <Body>
                            <Text>Regular</Text>
                        </Body>
                    </ListItem>
                </Collapsible>    
            </List>
            </View>
            <View style={Styles.buttonSearch}>
            <Button full>
                <Text>AA</Text>
            </Button>
            </View>
        </Container>
        )
    }
}