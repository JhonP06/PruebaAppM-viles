import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation} : any) {
  return (
    <View
    style={styles.container}
    >
        <ImageBackground
        style={{height:400, width:450}}
        source={{uri:"https://4kwallpapers.com/images/walls/thumbs_3t/24938.jpg"}}
        />
      <Text
      style={{fontSize:25}}
      >The Jhon Pillisa</Text>

      <TouchableOpacity
      
      onPress={() => navigation.navigate("Drawer")}>
        <Text>
            INGRESAR
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    }
})