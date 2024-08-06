import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function FileDetails({ route }: any) {
  const router = useRouter();
  const { file } = route?.params;

  const handleSendToBackend = () => {
    // Implementar a lógica de envio do arquivo para o backend
    console.log('Enviar arquivo para o backend:', file);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Arquivo</Text>
      <Text style={styles.fileName}>Nome: {file.name}</Text>
      <Text style={styles.fileSize}>Tamanho: {file.size} bytes</Text>
      <TouchableOpacity style={styles.button} onPress={handleSendToBackend}>
        <Text style={styles.buttonText}>Enviar para o Backend</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fileName: {
    fontSize: 18,
    marginBottom: 10,
  },
  fileSize: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
