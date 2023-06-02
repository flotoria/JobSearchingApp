import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Linking } from 'react-native'
import SearchBar from '../components/SearchBar' 
import * as React from 'react'
import WeatherCard from '../components/WeatherCard'
import useFetch from '../hook/useFetch'

const Home = () => {

  const {data, isLoading, error, refetch} = useFetch();

    if (data.length === 0) {
        return null;
      }

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <SearchBar />
        <FlatList data={data} renderItem={({item}) => (<TouchableOpacity onPress={() => (Linking.openURL(item.job_apply_link))}><WeatherCard data={item} /></TouchableOpacity>) }/>
    </SafeAreaView>
    
  )
}

const styles = () => StyleSheet.create({ 
  container: { 
    height: '10%'
  }
}
)

export default Home