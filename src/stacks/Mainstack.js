import React from 'react';
import { scrennOptions} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import CPM from '../screens/Servicos';
import Agendamento from '../screens/Agendamento';


const Stack = createNativeStackNavigator();

export default ()=>{
  return(
    <Stack.Navigator
        initialRouteName="Preload"
        scrennOptions ={{
            headerShown: false
        }}
         >

        <Stack.Screen name="Preload" component={Preload} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="Registration" component={Registration}  options={{ headerShown: false }}/>
        <Stack.Screen name="CPM" component={CPM}  options={{ headerShown: false }}/>
        <Stack.Screen name="Agendamento" component={Agendamento}  options={{ headerShown: false }}/>
       
    </Stack.Navigator>
  )
}
