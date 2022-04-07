import {View, StyleSheet, Text, Image, Dimensions} from 'react-native'
//import {color} from 'react-native-reanimated'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
//api-key
//bd43e989951445ecbede1b216897ff1c
const {width, height} = Dimensions.get('window')

const NewsCard = ({}) => {
    return(
        <View style={styles.cardView}>
            <Text style={styles.title}>Police reports suggest a larger pattern of AirTag stalking</Text>
            <Text style={styles.author}>Kris Holt</Text>
            <Image style={styles.image}/>
            <Text style={styles.description}>It’s been clear for a while that bad actors are planting location trackers\r\n on other people without their knowledge to track their locations. Trackers have been used in car thefts\r\</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.03,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3

    },
    title: {
        marginHorizontal: width * 0.04,
        marginVertical: width * 0.05,
        color: 'black',
        fontSize: 19,
        fontWeight: 'bold'
    },
    description: {
        marginVertical: width * 0.03,
        marginHorizontal: width * 0.04,
        color: 'grey',
        fontSize: 15
    },
    image:{
        width: width,
        height: height / 8,
        marginLeft: width * 0.05,
        marginLeft: width * 0.05,
        marginVertical: height * 0.02
    },
    author:{
        marginBottom: width * 0.03,
        marginHorizontal: width * 0.04,
        color: 'gray',
        fontSize: 15
    }

})

export default NewsCard