import React, { useState , useEffect } from 'react';
import { View ,StyleSheet,ImageBackground,ActivityIndicator,TouchableOpacity,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';





export default ()=>{


  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

    return (
      <View style={styles.container}>
            <ImageBackground
              source={{
                uri:
                  'https://i.pinimg.com/originals/47/91/e7/4791e74e3949c3ebbb94230f457e97ff.jpg',
              }}
              style={styles.imagemFundo}
              resizeMode="contain"
            />










<TouchableOpacity
        style={styles.button}
        onPress= {handleLoginPress}
        
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
         {/*} </View>
        )}*/}
      </View>
    );
    
  
}

const styles = StyleSheet.create({
  

  
    container: {
      flex:1,
      backgroundColor: 	'white',
      alignItems: 'center' ,
      justifyContent: 'center'
     
      
     },



     imagemFundo: {
      flex: 1,
      resizeMode: 'contain',
      width: '100%',
      height: '75%',
      marginTop: 150,
      //marginBottom:15
    
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'black',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      bottom:100
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },

    });
   