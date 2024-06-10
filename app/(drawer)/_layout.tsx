import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

import HeaderRight from '~/components/HeadeRight';
import HeaderLeft from '~/components/HeaderLeft';
import { theme } from '~/theme';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
        headerTitleAlign: 'left',
        headerRightContainerStyle: {
          paddingRight: 5,
        },
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerTitle: 'Transcribe',
          drawerLabel: 'Transcriptions',
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: theme.font.fontFamily.PoppinsSemiBold,
            textAlign: 'left',
            color: theme.colors.primary,
          },
          drawerIcon: ({ size, color }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="voice-memos/index"
        options={{
          headerTitle: 'Voice Memos',
          drawerLabel: 'Voice Memos',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="mic-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="trash/index"
        options={{
          headerTitle: 'Trash',
          drawerLabel: 'Trash',
          drawerIcon: ({ size, color }) => <Ionicons name="trash-bin" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="settings/index"
        options={{
          headerTitle: 'Settings',
          drawerLabel: 'Settings',
          drawerIcon: ({ size, color }) => <Ionicons name="settings" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
}
