import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import React from 'react'
import LightButton from '../components/LightButton'
import DarkButton from '../components/DarkButton'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Lublin_dzielnice.png')} style={styles.imageContainer}>
        <Text style={styles.title}>Welcome to</Text>
        <Image source={require('../assets/PixelHuntTitle.png')} style={styles.PixelHuntImg} />
      </ImageBackground>
      <LightButton title="Login" onPress={() => {navigation.navigate('Login');}} />
      <DarkButton title='Register' onPress={() => {navigation.navigate('Register');}} />
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CECECD',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5B443E',
    textTransform: "uppercase",
    alignSelf: 'center',
  },
  imageContainer: {
    resizeMode: 'contain',
    paddingTop: '25%',
    paddingBottom: '50%',
  },
  
  PixelHuntImg: {
    width: "70%",
    height: 100,
    resizeMode: "contain",
    alignSelf: "center"
  }
})