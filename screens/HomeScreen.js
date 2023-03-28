import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image style={styles.PixelHuntImg} source={require('../assets/PixelHuntTitle.png')} />
        <TouchableOpacity onPress={() => {navigation.navigate('Profile')}}>
          <Image style={styles.profilePic} source={require('../assets/FemAv1.png')} />
        </TouchableOpacity>
      </View>



    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
  },
  topBar: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: 80,
  },
  PixelHuntImg: {
    resizeMode: 'contain',
    width: '40%',
    height: 60,
  },
  profilePic: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  }
})