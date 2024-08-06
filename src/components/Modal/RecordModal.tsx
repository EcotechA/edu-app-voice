import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RecordModal = ({
  visible,
  onClose,
  onRecordAudio,
  onChooseFile,
  file,
  onSendToBackend,
}: any) => {
  if (file) {
    console.log('====================================');
    console.log(file);
    console.log('====================================');
  }
  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {file ? (
            <>
              <Text style={styles.title}>Arquivo Selecionado</Text>
              <Text style={styles.fileName}>Nome: {file[0].name}</Text>
              <Text style={styles.fileSize}>Tamanho: {file[0].size} bytes</Text>
              <TouchableOpacity style={styles.optionButton} onPress={onSendToBackend}>
                <Text style={styles.optionText}>Enviar para o Backend</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.title}>Selecione uma opção</Text>
              <TouchableOpacity style={styles.optionButton} onPress={onRecordAudio}>
                <Text style={styles.optionText}>Gravar Áudio</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={onChooseFile}>
                <Text style={styles.optionText}>Escolher Arquivo</Text>
              </TouchableOpacity>
            </>
          )}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  fileName: {
    fontSize: 18,
    marginBottom: 10,
  },
  fileSize: {
    fontSize: 18,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#f44336',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RecordModal;
