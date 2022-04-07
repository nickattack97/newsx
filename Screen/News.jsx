import { useState, useEffect } from 'react'
import {View, StyleSheet, Text, Button, FlatList} from 'react-native'
import NewsCard from '../Components/NewsCard'
import newsAPI from '../apis/News'
import axios from 'axios'

const News = ({navigation}) => {

    const [news, setNews] = useState([])

    useEffect(()=>{
      getNews()
    },[])
    
    function getNews(){
        newsAPI.get('everything?q=apple&from=2022-04-06&to=2022-04-06&sortBy=popularity&apiKey=bd43e989951445ecbede1b216897ff1c')
        .then(function(res){
            setNews(res.data)
        })
        .catch(function(err){
            console.log(err)  
        })
    }

    if(!news){
        return null
    }
    return(
        <View>
            <FlatList data = {news.articles}
            keyExtractor = {(item,index) => 'key' + index}
            renderItem = {(item) => {
                return <NewsCard/>
            }}/>
        </View>
    )
}

export default News