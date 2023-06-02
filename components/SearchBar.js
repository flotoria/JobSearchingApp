import { View, Text, TextInput, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { Search } from 'react-native-feather'
import { useState } from 'react'


const SearchBar = () => {

  return (
    <View style={styles.container}>
        <View style={styles.search}>
            <TextInput style={{fontSize: 17, fontFamily: 'DMSans-Regular'}} placeholder="Search" />
        </View>
        <TouchableOpacity style={{paddingTop: 7, paddingLeft: 8}}>
            <Search color='#ababab'></Search>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row'
    },
    search: { 
        backgroundColor: '#ebebeb',
        width: '85%',
        margin: 5,
        height: 30,
        paddingTop: 3,
        paddingLeft: 10,
        borderRadius: 10
    }

}) 

export default SearchBar