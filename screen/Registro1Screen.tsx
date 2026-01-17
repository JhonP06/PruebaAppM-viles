import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { db } from '../firebase/config'

export default function Registro1Screen() {

    const [Id, setId] = useState(0)
    const [Monto, setMonto] = useState(0)
    const [Categoria, setCategoria] = useState("")
    const [Descripcion, setDescripcion] = useState("")

    function Limpia(){
            setId(0),
            setMonto(0),
            setCategoria("")
            setDescripcion("")
    }

    function GuardarUsuario(){
        //const db = getDatabase();
    if(Categoria.trim() !="" || Descripcion.trim() !="" ){
      set(ref(db, 'UsuarioN/' + Id), {
    Id: Id,
    Monto: Monto,
    Categoria: Categoria,
    Descripcion: Descripcion
  }
  
);
Limpia()
Alert.alert("Mensaje", "Ingreso Exitoso")
    } else{
      Alert.alert("Error", "No se permiten espacios en blanco")
    } 
    
  }

  return (
    <View>
      <Text>Registro1Screen</Text>
      
            <TextInput
            placeholder='Ingresar ID'
            onChangeText={(text)=> setId(+text)}
            keyboardType="numeric"
            >
      
            </TextInput>
      
            <TextInput
            placeholder='Ingresar Monto'
            onChangeText={(text)=> setMonto(+text)}
            keyboardType="numeric"
            >
              
            </TextInput>
      
            <TextInput
            placeholder='Ingresar Categoría'
            onChangeText={(text)=> setCategoria(text)}
            >
              
            </TextInput>
      
            <TextInput
            placeholder='Ingresar Descripción'
            onChangeText={(text)=> setDescripcion(text)}
            >
              
            </TextInput>
            <Button
            title='Guardar'
            onPress={()=> GuardarUsuario()}
            />
    </View>
  )
}

const styles = StyleSheet.create({})