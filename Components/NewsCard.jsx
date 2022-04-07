import {View, StyleSheet, Text, Image, Dimensions} from 'react-native'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
const {width, height} = Dimensions.get('window')

const NewsCard = ({item}) => {
    return(
        <View style={styles.cardView}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
            <Image style={styles.image} source = {{uri: item.urlToImage}}/>
            <Text style={styles.description}>{item.description}</Text>
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
        height: height / 5,
        marginLeft: width * 0.04,
        marginRight: width * 0.05,
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