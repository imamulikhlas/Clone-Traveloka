import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const Styles = StyleSheet.create({
    container : {
        backgroundColor: '#eaeaea'
        
    },
    buttonSearch : {
        width: '100%',
        padding: 20,
        position: 'absolute',
        top: 350

        
    },
    contents : {
        padding: 10,
        backgroundColor: '#FFF',
        
    }
})

export { Styles, height, width }