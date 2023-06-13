import React, { useState , useEffect } from 'react';
import { View ,StyleSheet,Image,ActivityIndicator,TouchableOpacity,Text,Dimensions} from 'react-native';

import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');
const imageWidth = width * 0.8;
const imageHeight = height * 0.3;




export default () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Agendamento');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://correiodogranderecife.com.br/wp-content/uploads/2022/06/conservatorio-pernambucano-de-musica.jpg',
        }}
        style={styles.imagemTopo}
        resizeMode="contain"
      />

      <View style={styles.fundoColorido}>
        <Image
          source={{
            uri:
              'https://yt3.ggpht.com/a/AATXAJyIWsHy0i0fDhzUwcb2Hrsdkq7DT09ByLLOAg=s900-c-k-c0xffffffff-no-rj-mo',
          }}
          style={styles.imagemPerfil}
          resizeMode="contain"
        />

        <Text style={styles.TextoExplicativo}>Lista de Serviços</Text>

       

        <Text style={styles.TextoExplicativo3}>Sala1 C/ Piano</Text>

        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Agendar</Text>
        </TouchableOpacity>

        <Text style={styles.TextoExplicativo4}>Sala2 C/ Violão</Text>

        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Agendar</Text>
        </TouchableOpacity>

       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imagemTopo: {
    width: '100%',
    height: '48%',
    resizeMode: 'cover',
  },

  imagemdivisao: {
    width: '100%',
    height: '25%',
    resizeMode: 'cover',
  },

  imagemPerfil: {
    width: '30%',
    height: '20%',
    left: '5%',
    top: '-12%',
    borderRadius: 10,
  },

  TextoExplicativo: {
    fontSize: 20,
    fontFamily: 'Roboto',
    marginTop: '-15%',
    marginLeft: '6%',
    color: '#8ABAD9',
  },

  TextoExplicativo2: {
    fontSize: 16,
    fontFamily: 'Georgia',
    marginTop: '-16%',
    marginLeft: '30%',
    fontWeight: 'bold',
  },

  TextoExplicativo3: {
    fontSize: 16,
    fontFamily: 'Georgia',
    marginTop: '10%',
    marginLeft: '6%',
    fontWeight: 'bold',
  },

  TextoExplicativo4: {
    fontSize: 16,
    fontFamily: 'Georgia',
    marginTop: '4%',
    marginLeft: '6%',
    fontWeight: 'bold',
  },

  buttonText: {
    color: 'white',
    //fontSize: '2.5%',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#8ABAD9',
    //paddingVertical: 10,
    //paddingHorizontal: 5,
    borderRadius: 5,
    top: '-3%',
    left: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    width:'28%'
  },

  fundoColorido: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '72%',
    backgroundColor: 'white',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 3,
  },
});
