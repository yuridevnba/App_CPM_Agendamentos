import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text, TextInput, Dimensions, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import  useUser  from '../../api/Contexts/UsersContext'

const { width, height } = Dimensions.get('window');
const imageWidth = width * 0.8;
const imageHeight = height * 0.3;

export default () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const {user, addUser} = useUser()
 
  const navigation = useNavigation();
 

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://backend-scheduling-n00p.onrender.com/login', {
        
        email,
        senha,
      });

      const cliente = response.data.cliente
      // console.log(response.data.cliente)
      const novoUsuario = {
        id: cliente.id,
        nome: cliente.nome
      }
      addUser(novoUsuario)
      console.log('aqui', user)
      navigation.navigate('CPM');
      Alert.alert("Massa, agora agende as salas!");

    } catch (error) {

      navigation.navigate('Registration');
      console.log('Erro ao fazer login:', error);
      Alert.alert('Erro', 'vc não é cadastrado faça-o.');
      
    }
  };

  const handleLoginPress = () => {
    navigation.navigate('Registration');
  };


  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            'https://i.pinimg.com/originals/cf/48/2b/cf482bc5953ce4b5c3916630877fd866.jpg',
        }}
        resizeMode="contain"
        style={[styles.imagemFundo, { width: imageWidth, height: imageHeight }]}
      />

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.ac3911d857f6ef4171ad06a5c92e7eca?rik=qu8VAsS%2f4%2f7SeQ&riu=http%3a%2f%2fralbar.com%2fwp-content%2fuploads%2f2018%2f11%2fmail-icon-768x768.png&ehk=umhWEUiOv98T6mV30nJ3XUAB6AISIT9OhsXiI0iRMvc%3d&risl=&pid=ImgRaw&r=0',
            }}
            style={styles.imagemInput}
          />
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            //placeholder="Digite seu e-mail"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Image
            source={{
              uri: 'https://fsfaformacion.es/bundles/ugt/images/icono-acceso-plataforma.png',
            }}
            style={styles.imagemInput}
          />
          <TextInput
            style={styles.input}
            keyboardType="default"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
            //placeholder="Digite sua senha"
            
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin} >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={[styles.forgotPassword, { marginTop: 20 }]}>Cadastra-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    width: width * 0.8,
    alignItems: 'center',
  },
  inputWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    position: 'absolute',
    left: 10,
  },
  forgotPassword: {
    color: 'black',
    textDecorationLine: 'underline',
  },
});
