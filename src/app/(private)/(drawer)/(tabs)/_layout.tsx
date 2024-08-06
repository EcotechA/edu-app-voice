import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker';
import { Tabs, router } from 'expo-router';
import React, { useState } from 'react';

import PlusRecordMid from '~/src/components/Icons/PlusRecordMid';
import TranscriptionSheet from '~/src/components/Icons/TranscriptionSheet';
import RecordModal from '~/src/components/Modal/RecordModal';
import TabIcon from '~/src/components/TabIcon';
import { theme } from '~/theme';

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState<DocumentPicker.DocumentPickerAsset[] | null>(
    null
  );

  const handleRecordPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedFile(null); // Limpar o arquivo selecionado ao fechar o modal
  };

  const handleRecordAudio = () => {
    console.log('Gravar Áudio');
    setModalVisible(false);
  };

  const handleChooseFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.assets) {
      setSelectedFile(result.assets);
    }
  };

  const handleSendToBackend = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append('file', {
          uri: selectedFile[0].uri,
          name: selectedFile[0].name,
          type: selectedFile[0].mimeType,
        });

        const response = await axios.post('https://api.example.com/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Resposta do backend:', response.data);
      } catch (error) {
        console.error('Erro ao enviar o arquivo para o backend:', error);
      }
    }
  };

  return (
    <>
      <Tabs
        backBehavior="history"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.TextGray333Light,
          tabBarInactiveTintColor: theme.colors.TextGray999Light,
          tabBarStyle: {
            borderTopWidth: 0,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: '',
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused}>
                <TranscriptionSheet width={30} height={30} />
              </TabIcon>
            ),
          }}
        />
        <Tabs.Screen
          name="record"
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault();
              handleRecordPress();
            },
          })}
          options={{
            title: '',
            tabBarIcon: ({ size, focused }) => (
              <TabIcon focused={focused}>
                <PlusRecordMid size={size} />
              </TabIcon>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          listeners={{
            tabPress: (event) => {
              event.preventDefault();
              router.navigate('profile');
            },
          }}
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused}>
                <Feather name="user" size={30} />
              </TabIcon>
            ),
          }}
        />
      </Tabs>
      <RecordModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onRecordAudio={handleRecordAudio}
        onChooseFile={handleChooseFile}
        file={selectedFile}
        onSendToBackend={handleSendToBackend}
      />
    </>
  );
}
