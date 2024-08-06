import { BlurView } from 'expo-blur';
import React from 'react';
import { Modal, Text, Pressable, View } from 'react-native';

interface ModalProps {
  visible: boolean;
  title: string;
  message: string;
  status: 'error' | 'success' | 'info';
  onClose: () => void;
}

const MModal: React.FC<ModalProps> = ({ visible, title, message, status = 'info', onClose }) => {
  const getButtonStyle = () => {
    switch (status) {
      case 'error':
        return 'bg-red-600';
      case 'success':
        return 'bg-green-500';
      case 'info':
        return 'bg-blue-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <View className="flex flex-1 justify-center w-full h-full items-center">
        <BlurView intensity={100} className="flex flex-1 w-full h-full justify-center items-center">
          <View className="m-5 bg-white rounded-2xl p-9 items-center shadow-md shadow-black shadow-opacity-25 shadow-offset-y-2 shadow-radius-4 elevation-5">
            <Text className="mb-4 text-center text-lg font-bold">{title}</Text>
            <Text className="mb-4 text-center">{message}</Text>
            <Pressable
              className={`rounded-2xl p-2 elevation-2 ${getButtonStyle()}`}
              onPress={onClose}>
              <Text className="text-white font-bold text-center">OK</Text>
            </Pressable>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default MModal;
