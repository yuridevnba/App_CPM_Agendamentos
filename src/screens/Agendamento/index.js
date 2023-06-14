import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet,Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';
import useUser from '../../api/Contexts/UsersContext';
import { useNavigation } from '@react-navigation/native';




const ButtonList = () => {
  const buttons = [
    
    { label: '09-10', value: '09-10' },
    { label: '10-11', value: '10-11' },
    { label: '11-12', value: '11-12' },
    { label: '12-13', value: '12-13' },
    { label: '13-14', value: '13-14' },
    { label: '14-15', value: '14-15' },
    { label: '15-16', value: '15-16' },
    { label: '16-17', value: '16-17' },
    { label: '17-18', value: '17-18' },
    { label: '18-19', value: '18-19' },
    

  ];
   
  
  const [pressedButton, setPressedButton] = useState(null);
  
  
  const handleButtonPress = (buttonIndex) => {
    setPressedButton(buttonIndex);
  };

  return (

    
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {buttons.map((button, index) => (
        <TouchableOpacity
         key={index} 
         onPress={() => handleButtonPress(index)}
         style={[styles.button, pressedButton === index && styles.buttonPressed]}>
          
          <View> 
        <Text
          style={[
            styles.buttonText,
            pressedButton === index && styles.buttonTextPressed
          ]}
        >
          
          {button.label} 
        </Text>
      </View>
    </TouchableOpacity>
  ))}
      
    </ScrollView>
  );
};

export default function App() {

  const navigation = useNavigation();
 
  
  const {user} = useUser();

  console.log("agendamento", user)


  const [clienteId, setCliente] = useState(user.id);
  const [disponibilidade, setDisponibilidade] = useState(true);
  const [data, setData] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://backend-scheduling-n00p.onrender.com/horarios/', {
       data,
       disponibilidade,
       clienteId

      });
      //navigation.navigate('CPM');
      
      console.log(response.data);
      
      Alert.alert( 'Agendamento realizado com sucesso');
      navigation.navigate('CPM');
    
    
    } catch (error) {
      //console.log('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao fazer agendamento');
    }
  };
    
  
  

  const renderArrow = (direction) => {
    return (
      <Feather
        name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        size={24}
        color="black"
      />
    );
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.card1}>
        <Text style={styles.Texto1}></Text>

        
      </View>

      <Calendar
        onDayPress={day => {
          setData(day.dateString);
        }}
        markedDates={{
          [data]: { selected: true, disableTouchEvent: true, selectDotColor: '#00898d' }
        }}
        renderArrow={renderArrow}
        style={styles.Calendario}
      />

      <View style={styles.horario}>

        <ButtonList />

      </View>

      <View  style={styles.informacao}>

       <Text>Dia Marcado: {data}</Text>

  

      </View>

      
      <TouchableOpacity style={styles.buttonAgendar} onPress={handleLogin} >
          <Text style={styles.buttonText}>Agendar</Text>
        </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
     card1: {

    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '12%',
    //resizeMode: 'cover',
    backgroundColor:'white',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:"-8%",
    borderRadius:10,
    marginBottom:10
  },

  


  

  Texto1: {
    fontSize: 20,
    fontFamily: 'Roboto',
    //marginTop: '-15%',
   // marginLeft: '6%',
    color: '#black',
  },

 

   Calendario:{
    width:'70%',
    height:'-50%',
    marginLeft:'auto',
    marginRight:'auto',
    //selectedDotColor: '#00898d'
   },

   horario:{


    borderWidth: 2,
    borderColor:'#e2e2e2',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
    //resizeMode: 'cover',
    backgroundColor:'white',
    //marginLeft:'auto',
    //marginRight:'auto',
    marginTop:10,
    borderRadius:10,
    marginBottom:10

   },

 
  buttonText: {
    color: 'black',
    //fontSize: '2.5%',
    fontWeight: 'bold',
  },

  button: {
    borderWidth: 1,
    borderColor:'#e2e2e2',
    marginRight:10,
    //backgroundColor: '#8ABAD9',
    //paddingVertical: 10,
    //paddingHorizontal: 5,
    borderRadius: 5,
   // top: '-3%',
    //left: '70%',
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
    width:'8%',
    height:'45%'
  },

  buttonPressed: {
    borderWidth: 4,
    borderColor:'#0893ff',
    //backgroundColor: '#c8ffff',
    marginRight:10,
    //backgroundColor: '#8ABAD9',
    //paddingVertical: 10,
    //paddingHorizontal: 5,
    borderRadius: 5,
   // top: '-3%',
    //left: '70%',
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    width:'11%',
    height:'45%'
  },
 
  buttonTextPressed: {
    color: 'black',
  },

  informacao:{
     backgroundColor:'#e2e2e2',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '12%',
    //resizeMode: 'cover',
   
    marginLeft:'auto',
    marginRight:'auto',
    //marginTop:10,
    borderRadius:10,
    marginBottom:10
  },

  buttonAgendar:{

    borderColor:'#0893ff',
    borderWidth: 1,
    marginRight:'auto',
    marginLeft:'auto',
    //backgroundColor: '#8ABAD9',
    //paddingVertical: 10,
    //paddingHorizontal: 5,
    borderRadius: 5,
   // top: '-3%',
    //left: '70%',
    //marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
    width:'50%',
    height:'8%'
  }

 
});
