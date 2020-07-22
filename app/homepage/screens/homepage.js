import React, { Component } from 'react'
import { View, Text, FlatList, Dimensions, Image, TouchableNativeFeedback } from 'react-native'
import { Grid, Col, Row} from  'react-native-easy-grid'
import {
    styles
} from '../assets/style'
import {Icon, Content, Button} from 'native-base'
import { NavigationAction } from 'react-navigation'

export default class Homepage extends Component {


    handleNavigateHotel= () =>{
       this.props.navigation.navigate('HotelsSearch')
    }
    state = {
        data : [
            {id: 1, text: 'Pulsa Prabayar', icon: 'add', color: '#123'},
            {id: 2, text: 'Pulsa Prabayar', icon: 'add', color: '#321'},
            {id: 3, text: 'Pulsa Prabayar', icon: 'add', color: '#123'},
            {id: 4, text: 'Pulsa Prabayar', icon: 'add', color: '#321'},
            {id: 5, text: 'Pulsa Prabayar', icon: 'add', color: '#123'},
            {id: 6, text: 'Pulsa Prabayar', icon: 'add', color: '#321'},
            {id: 7, text: 'Pulsa Prabayar', icon: 'add', color: '#123'},
        ],

        pict : [
            {id: 1, uri: require('../../img/d.png')},
            {id: 2, uri: require('../../img/d.png')},
            {id: 3, uri: require('../../img/d.png')},
            {id: 4, uri: require('../../img/d.png')},
            {id: 5, uri: require('../../img/d.png')},
            {id: 6, uri: require('../../img/d.png')},
            {id: 7, uri: require('../../img/d.png')},
            {id: 8, uri: require('../../img/d.png')},
            {id: 9, uri: require('../../img/d.png')},
            {id: 10, uri: require('../../img/d.png')},
            {id: 11, uri: require('../../img/d.png')},
            {id: 12, uri: require('../../img/d.png')},
            {id: 13, uri: require('../../img/d.png')}
        ]
    }

  render() {
    return (
    
      <View style={styles.container}>
      <Content>
      
{/*============== {top profile} ===================*/}
        <View style={[styles.profile,{borderBottomWidth: 0.3, borderBottomColor: 'rgba(0,0,0,0.2)'}]}>
            <View style={{flexDirection: 'row', left: -20}} >
                <Button style={{alignSelf: 'center'}} transparent large>
                    <Icon style={{color: 'black', fontSize: 30}} name='ios-contact-outline' />
                </Button>
                <View style={{alignSelf: 'center'}} >
                    <Text style={{fontSize: 15, fontWeight: '200    ', color: 'black'}} >Masuk atau Daftar</Text>
                    <Text style={{fontSize: 10, color: 'black'}} >Nikmati keuntungan member traveloka</Text>
                </View>
            </View>
        </View>
{/*============== {top profile end} =================== */}

{/*============== {Main menu } =================== */}
        <View style={styles.mainMenu}>
            <Grid>
            <Col style={styles.colMenu}>
                    <View>
                        <View style={styles.containerIconText}>
                            <View style={[styles.containerIcon, {backgroundColor: '#6ba3ff'}]}>

                                <Icon style={{color:"#FFF", fontSize: 25}} type='FontAwesome' name="plane" />

                            </View>
                        </View>

                        <View style={styles.containerTextMenu}>
                            <Text style={styles.textMenu}>Flights</Text>
                        </View>    
                    </View>
                </Col>           
                <Col style={styles.colMenu}>
                    <View>
                        <View style={styles.containerIconText}>
                            <TouchableNativeFeedback onPress={this.handleNavigateHotel}>
                            <View style={styles.containerIcon}>

                            {/* {ico here} */}

                            </View>
                            </TouchableNativeFeedback>
                        </View>

                        <View style={styles.containerTextMenu}>
                            <Text style={styles.textMenu}>Hotels</Text>
                        </View>    
                    </View>
                </Col>           
                <Col style={styles.colMenu}>
                    <View>
                        <View style={styles.containerIconText}>
                            <View style={styles.containerIcon}>

                            {/* {ico here} */}

                            </View>
                        </View>

                        <View style={styles.containerTextMenu}>
                            <Text style={styles.textMenu}>Trains</Text>
                        </View>    
                    </View>
                </Col>           
                <Col style={styles.colMenu}>
                    <View>
                        <View style={styles.containerIconText}>
                            <View style={styles.containerIcon}>

                            {/* {ico here} */}

                            </View>
                        </View>

                        <View style={styles.containerTextMenu}>
                            <Text style={styles.textMenu}>Bus & Shuttle</Text>
                        </View>    
                    </View>
                </Col>           
                <Col style={styles.colMenu}>
                    <View>
                        <View style={styles.containerIconText}>
                            <View style={styles.containerIcon}>

                            {/* {ico here} */}

                            </View>
                        </View>

                        <View style={styles.containerTextMenu}>
                            <Text style={styles.textMenu}>Atractions & Activities</Text>
                        </View>    
                    </View>
                </Col>           
            </Grid>

            <Grid>
            <Col style={styles.colMenu}>
                    <View>
                        <View style={styles.containerIconText}>
                            <View style={styles.containerIcon}>

                            {/* {ico here} */}

                            </View>
                        </View>

                        <View style={styles.containerTextMenu}>
                            <Text style={styles.textMenu}>Hotels + Flights</Text>
                        </View>    
                    </View>
                </Col>           
                <Col style={styles.colMenu}>
                    <View>
                        <View style={styles.containerIconText}>
                            <View style={styles.containerIcon}>

                            {/* {ico here} */}

                            </View>
                        </View>

                        <View style={styles.containerTextMenu}>
                            <Text style={styles.textMenu}>Atractions & Activities</Text>
                        </View>    
                    </View>
                </Col>           
                <Col style={styles.colMenu}>
                    <View>
                        <View style={styles.containerIconText}>
                            <View style={styles.containerIcon}>

                            {/* {ico here} */}

                            </View>
                        </View>

                        <View style={styles.containerTextMenu}>
                            <Text style={styles.textMenu}>Atractions & Activities</Text>
                        </View>    
                    </View>
                </Col>           
                <Col style={styles.colMenu}>
                    <View>
                        <View style={styles.containerIconText}>
                            <View style={styles.containerIcon}>

                            {/* {ico here} */}

                            </View>
                        </View>

                        <View style={styles.containerTextMenu}>
                            <Text style={styles.textMenu}>Atractions & Activities</Text>
                        </View>    
                    </View>
                </Col>           
                <Col style={styles.colMenu}>
                    <View>
                        <View style={styles.containerIconText}>
                            <View style={styles.containerIcon}>

                            {/* {ico here} */}

                            </View>
                        </View>

                        <View style={styles.containerTextMenu}>
                            <Text style={styles.textMenu}>Atractions & Activities</Text>
                        </View>    
                    </View>
                </Col>           
            </Grid>
        </View>
{/*============== {Main menu end} =================== */}

{/*============== {Scroll Menu} =================== */}
        <View style={styles.scrollMenu}>
            <FlatList 
                data={this.state.data}
                horizontal={true}
                keyExtractor = {(item) => item.id.toString()}
                renderItem={({item}) => 
                <Grid>
                <Col size={20}>
                    <View>
                        <View style={styles.containerIconScroll}>
                            <Icon name="add" />
                        </View>
                        <View style={styles.containerTextScroll}>
                            <Text style={styles.textMenu}>
                                {item.text}
                            </Text>
                        </View>
                        </View>
                   </Col>
                </Grid>  
            }
            
            />
        </View>
{/*============== {Scroll Menu end} =================== */}

{/*============== {Blank Space 1} =================== */}
        <View style={[styles.blankSpace]}>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}} >
                <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 15, marginLeft: 10, color: 'black'}} >Promo Saat ini</Text>
                <Button transparent>
                    <Icon name='ios-arrow-forward' />
                </Button>
            </View>
            <FlatList
                data={this.state.pict}
                horizontal={true}
                keyExtractor= {(item) => item.id.toString()}
                renderItem={({ item }) => 
                <Image style={{height: 100, width: 199, marginLeft: 15, marginRight: 7}} source={item.uri} />
            }
            />
        </View>
{/*============== {Blank Space 1 end} =================== */}

{/*============== {Blank Space 2} =================== */}

        <View style={[styles.blankSpace, styles.blankSpace2]}>
            <View>
                <Text style={{fontWeight: 'bold', color: '#fff'}}>Aktifkan Lokasi Anda</Text>
                <Text style={{color: '#fff', textAlign:'left', fontSize: 11}}> Untuk rekomendasi produk yang paling relevan</Text>
                <Button bordered light style={styles.buttonLokasi}><Text style={{color: '#FFF', fontWeight:'bold'}}>AKTIFKAN DI PENGATURAN</Text></Button>
            </View>
        </View>
{/*============== {Blank Space 2 end} =================== */}
        </Content>
      </View>
    )
  }
}
