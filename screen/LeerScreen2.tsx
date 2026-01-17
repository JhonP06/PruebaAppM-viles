import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/config';

export default function LeerScreen2() {

    interface UsuarioN {
    Id?: string;
    Monto: number;
    Descripcion: string;
}


    useEffect(() => {
    leerPers()
  }, [])


  const [Person, setPerson] = useState([])
  

  function leerPers(){
    const starCountRef = ref(db, 'UsuarioN/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();


  let listaPerso:any = Object.keys(data).map(Id => ({
    Id, ...data[Id]
  }))


  setPerson(listaPerso)
  
  //console.log(Person);
  
});
  }

  function leer2(Id : string){
    const userRef = ref(db, `UsuarioN/ ${Id}`);
    onValue(userRef, (snapshot) => {
        const data = snapshot.val() as UsuarioN | null;

        
        
        if (data) {
            Alert.alert("Mensaje", `Descripción: ${data.Descripcion}, Costo: ${data.Monto}`);
        } else {
            Alert.alert("Mensaje", "no se ha encontrado nada");
        }
    });
  }
    
  return (
    <View>
      <Text>LeerScreen2</Text>

      <FlatList
      data={Person}
      renderItem={({item}: any) =>
      
      <TouchableOpacity
      
      onPress={()=> leer2("")}>
        <Text>
        {item.Id}...
        {item.Categoria}
      </Text>
      </TouchableOpacity>
      }
      />
    </View>
  )
}

const styles = StyleSheet.create({})