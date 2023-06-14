import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/Mainstack'




export default ()=>{
  return(
   

    <NavigationContainer>
      <MainStack></MainStack>
    </NavigationContainer>

    
  )
}

