import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const WeatherCard = ({data}) => {

  return (
    <View style={styles.cardContainer}>
        <View style={styles.card}>
            <View style={{alignItems: 'start', flexDirection: 'row'}}>
                <Image style={{width: '20%', height: 45, resizeMode: 'contain'}}source={{uri: data.employer_logo}}/>
            </View>
                <Text style={{fontFamily: 'DMSans-Bold', fontSize: 20}} numberOfLines={1}>{data.employer_name} </Text>
               
                <Text style={{fontFamily: 'DMSans-Regular', fontSize: 15}} numberOfLines={1} ellipsizeMode="tail">{data.job_title} </Text>
                <Text style={{color: '#696969', fontFamily: 'DMSans-Regular', fontSize: 15}} numberOfLines={1}>{data.job_country} </Text>
                <Text style={{color: '#696969', fontFamily: 'DMSans-Regular', fontSize: 15}} numberOfLines={1}>{data.job_publisher} </Text>
           
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginLeft: '0.05%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 160,
        marginTop: 7, 
    },
    card: {
       padding: 10,
        borderWidth: 1,
        width: '95%',
        height: '100%',
        borderRadius: 20,
        borderColor: '#D8D8D8',
        shadowColor: '#999898',
    }
})

export default WeatherCard