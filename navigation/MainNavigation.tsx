import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import { NavigationContainer } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screen/HomeScreen";
import Registro1Screen from "../screen/Registro1Screen";
import LeerScreen2 from "../screen/LeerScreen2";
import EditarScreen3 from "../screen/EditarScreen3";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Drawer" component={MyDrawer}/>
        </Stack.Navigator>
    )
}

function MyDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Registro" component={Registro1Screen}/>
            <Drawer.Screen name="Leer" component={LeerScreen2}/>
            <Drawer.Screen name="Editar" component={EditarScreen3}/>
        </Drawer.Navigator>
    )
}

export default function MiStack(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}