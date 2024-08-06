import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React, { ReactNode } from 'react';
import { Modal, Pressable, View } from 'react-native';

interface CustomModalProps {
  visible: boolean;
  titleComponent?: ReactNode;
  bodyComponent?: ReactNode;
  footerComponent?: ReactNode;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  titleComponent,
  bodyComponent,
  footerComponent,
  onClose,
}) => {
  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <View className="flex-1 justify-center items-center w-full">
        <BlurView intensity={100} className="flex-1 justify-center items-center w-full">
          <View className=" bg-white flex felx-col rounded-2xl w-[90%] mx-8 px-9 py-4 items-center shadow-md shadow-black shadow-opacity-25 shadow-offset-y-2 shadow-radius-4 elevation-5">
            <Pressable className="absolute top-3 right-3" onPress={onClose}>
              <Feather name="x" size={24} color="black" />
            </Pressable>
            <View className="mb-4 text-center text-lg font-bold w-full">{titleComponent}</View>
            <View className=" text-center ">{bodyComponent}</View>
            <View className="rounded-2xl p-2 elevation-2 w-full">{footerComponent}</View>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default CustomModal;
