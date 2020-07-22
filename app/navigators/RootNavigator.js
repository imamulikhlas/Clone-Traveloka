import { StackNavigator, createMaterialTopTabNavigators } from 'react-navigation';
import React from 'react'
import { Text, Button, Icon } from 'native-base'
import { ContactsList, ContactsCreate, ContactsDetail } from '../contacts/screens'
import { HotelsList, HotelsCreate, HotelsDetail, HotelsSearch, LocationsSearch } from '../hotels/screens'
import { ProductsList, ProductsCreate, productsDetail } from '../products/screens'
import { Homepage } from '../homepage/screens'
import HomeScreen from '../homepage/screens/bottomTab'
import { topTab  } from '../pesawat/screens'

const RootNavigator = StackNavigator({
  ContactsList: {
    screen: ContactsList,
    navigationOptions: {
      title: 'Contacts List'
    }
  },
  ContactsCreate: {
    screen: ContactsCreate,
    navigationOptions: {
      title: 'Create Contact'
    }
  },
  ContactsDetail: {
    screen: ContactsDetail,
    navigationOptions: {
      title: 'Detail Contact'
    }
  },
  ProductsList: {
    screen: ProductsList,
    navigationOptions: {
      title: 'Products List'
    }
  },
  HotelsList: {
    screen : HotelsList
  },
  HotelsSearch: {
    screen : HotelsSearch
  },
  LocationsSearch : {
    screen : LocationsSearch
  },
  Homepage : {
    screen : Homepage
  },
  HomeScreen : {
    screen : HomeScreen,
    navigationOptions :{

      headerTitle: <Text style={{fontSize: 20,color: '#FFF', left: 15 }} >traveloka</Text>,
      headerRight: (
          <Button style={{alignSelf: 'center'}} onPress={() => alert('This is a button!')} transparent>
              <Icon style={{color: 'white'}} name="more" />
          </Button>
        ),
      headerStyle: {
          backgroundColor: '#3498db',
          elevation: 0  
      }
      
  }
  },
  topTab : {
    screen : topTab
  }  

})

export default RootNavigator
