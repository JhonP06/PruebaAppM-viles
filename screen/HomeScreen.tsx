import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation} : any) {
  return (
    <View
    style={styles.container}
    >
      <Text
      style={{fontSize:25, paddingBlockStart:45, alignSelf:"center"}}
      >The Jhon Pillisa</Text>

        <ImageBackground
        style={{height:450, width:450}}
        source={{uri:"https://4kwallpapers.com/images/walls/thumbs_3t/24938.jpg"}}
        />
      

      <TouchableOpacity
      style={{alignSelf:"center",}}
      onPress={() => navigation.navigate("Drawer")}>
        <Text
        style={{fontSize:20, color:"#71bd6e"}}
        >
            INGRESAR
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        backgroundColor:"#666"
    }
})