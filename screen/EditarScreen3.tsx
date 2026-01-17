import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { db } from '../firebase/config'
import { ref, remove, update } from 'firebase/database'

export default function EditarScreen3() {
    const [Id, setId] = useState(0)
    const [Monto, setMonto] = useState(0)
    const [Categoria, setCategoria] = useState("")
    const [Descripcion, setDescripcion] = useState("")

    function EditarDatos() {
    //const db = getDatabase();
    update(ref(db, 'UsuarioN/' + Id), {
      Id: Id,
      Monto: Monto,
      Cat : Categoria,
      Desc : Descripcion
    });
  }

  function EliminarDatos() {
    //const db = getDatabase();
    //remove(ref(db, 'Personaje/' + id));

    Alert.alert("Mensaje", "Estas seguro de eliminar??",[
      {
        text:"Eliminar",
        onPress: ()=> remove(ref(db, 'Personaje/' + Id))
      },
      {
        text:"Cancelar"
      }
    ])
  }

  return (
    <View>
      <Text>EditarScreen3</Text>

      <TextInput
          placeholder='Ingresar ID'
          
          onChangeText={(texto)=> setId(+texto) }
          >
  
          </TextInput>
  
          <TextInput
          placeholder='Ingresar Categoria'
          
          onChangeText={(texto)=> setCategoria(texto) }
          >
  
          </TextInput>
  
          <TextInput
          placeholder='Ingresar Monto'
          
          onChangeText={(texto)=> setMonto(+texto) }
          ></TextInput>
  
          <TextInput
          placeholder='Descripcion' 
          
          onChangeText={(texto)=> setDescripcion(texto) }
          ></TextInput>
  
          <Button
          title='Editar'
          color={'blue'}
          onPress={() => EditarDatos() }
          />

          <Text>Eliminar</Text>

          <TextInput
              placeholder='Ingresar ID'
              
              onChangeText={(texto)=> setId(+texto) }
              >
              </TextInput>

              <Button
              onPress={()=> EliminarDatos()}
              title='Eliminar'
              color={"red"}
              />

    </View>
  )
}

const styles = StyleSheet.create({})