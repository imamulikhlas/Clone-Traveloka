import React from 'react';
import { 
  ListItem, Body, Text, Left, Card,
  CardItem, Right, Icon
 } from 'native-base';
import {
  Image, View, StyleSheet
} from 'react-native'
export default (props) => {
  const ratingObj = {
    rate : props.item.rating
  }
  let radios = [];
  let ratings = [];
  for(let i = 1; i <= 5; i++ ){
    let star = <Icon style={{color:'orange', fontSize: 15}} name='md-star' />
    let radio = <Icon style={{color:'green', fontSize:13}} type='MaterialIcons' name='radio-button-checked'/>
    if (i > ratingObj.rate){
      star = <Icon style={{fontSize: 15}} name='ios-star-outline' />
      radio = <Icon style={{color:'green', fontSize:13}} type='MaterialIcons' name='radio-button-unchecked'/>
    }
    ratings.push(star)
    radios.push(radio)
  }
  
  return (
    <Card style={{flexDirection: 'row', justifyContent:'flex-start'}}>
      <View>
        <Image 
          style={{width: 120, height: '100%'}}
          source={{uri : props.item.image_url}}
          />
      </View>
      
      <View style={{left:5, paddingVertical:10}}>
        <View style={{flex:0.5, flexDirection:'column'}}>
          <Text>{props.item.name}</Text>
          <Text style={{fontSize:13, color:'#2B9FDC'}}>{ratings} &nbsp;Pay At Hotel Available</Text>
          <Text style={{fontSize:13}} note><Icon style={{fontSize:13}} name='pin'/>&nbsp;{props.item.location}</Text>
              <View style={{flexDirection:'row'}}>
                  <View style={{width:20, height:20, justifyContent:'center'}}>
                    <Image
                        source={require('../../img/icon/traveloka.png')}
                        style={{height:'100%', width:'100%'}}
                    />
                  </View>
                  <View style={{justifyContent:'center'}}>
                    <Text style={{color:'#2B9FDC', fontSize:13}}>&nbsp;8.8&nbsp;<Text note style={{fontSize:13}}>(6502)&nbsp;|&nbsp;</Text></Text>
                  </View>
                  <View style={{width:20, height:20}}>
                    <Image
                        source={require('../../img/icon/trip.png')}
                        style={{height:'100%', width:'100%'}}
                    />
                  </View>
                  <View style={{justifyContent:'center'}}>
                   <Text style={{fontSize:13,}} note> {radios}&nbsp;(6823)</Text>
                  </View>
              </View>
        </View>
        <View style={{flex:0.5,paddingTop:10}}>
          <Text style={{fontSize:13}} note>Layar Bola Traveloka</Text>
          <Text note style={{textDecorationLine:'line-through',fontSize:13,}}>Rp.1000.000</Text>
          <Text style={{color:'orange'}}>Rp.750.000<Text note>/room/night</Text></Text>
          <Text style={{fontSize:13,}} note>Inclusive Taxes</Text>
        </View>
      </View>
      
    </Card>
  )



}