import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text, TextInput, Dimensions, Image, Alert } from 'react-native';
import axios from 'axios';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');
const imageWidth = width * 0.8;
const imageHeight = height * 0.3;

export default function App() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://backend-scheduling-n00p.onrender.com/clientes/', {
        nome,
        email,
        senha,
      });

      console.log(response.data);
      
      navigation.navigate('Login');
      Alert.alert("Massa, agora volte para fazer o Login!");
    } catch (error) {
      console.log('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://th.bing.com/th/id/OIP.GDNuG9vvFMjRptMdkPYHfAHaFL?pid=ImgDet&rs=1',
        }}
        resizeMode="contain"
        style={[styles.imagemFundo, { width: imageWidth, height: imageHeight }]}
      />
        
      <View style={styles.inputContainer}>

      <Feather name="user" size={24} color="black" style={[styles.imagemInput, {top: '10%' }]} />
      <TextInput
            style={styles.input2}
            keyboardType="default"
            value={nome}
            onChangeText={setNome}
            placeholder='digite seu nome'
            autoCapitalize="none"
          />

        <View style={styles.inputWrapper}>
          
           <Feather name="mail" size={24} color="black" style={styles.imagemInput} />
           <TextInput
            style={styles.input}
            keyboardType="default"
            value={email}
            placeholder='digite seu email'
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          
        </View>
  
        <View style={styles.inputWrapper}>
          
          <Feather name="lock" size={24} color="black" style={styles.imagemInput} />
         <TextInput
            style={styles.input}
            keyboardType="visible-password"
            value={senha}
            placeholder='digite sua senha'
            onChangeText={setSenha}
            secureTextEntry={true}
          />
          
          
        </View>
  
        
          
        </View>
  
        <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
   
  );
          }  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemFundo: {
    resizeMode: 'contain',
    marginTop: height * 0.007,
  },
  inputContainer: {
    flexDirection: 'column',
    width: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop:10,
  },
  input: {
    width: '100%',
    height: height * 0.09,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 60,
    marginLeft: 10,
  },
  input2: {
    width: '97%',
    height: height * 0.09,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 60,
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.03,
    borderRadius: 5,
    marginBottom: 16,
    width: 190,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagemInput: {
    width: 40,
    height: height * 0.05,
    resizeMode: 'contain',
    color: '#696969',
    position: 'absolute',
    left: '6%',
  },
  forgotPassword: {
    color: 'black',
    textDecorationLine: 'underline',
  },
});
