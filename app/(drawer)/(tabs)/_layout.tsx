import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import PlusRecordMid from '~/components/Icons/PlusRecordMid';
import TranscriptionSheet from '~/components/Icons/TranscriptionSheet';
import { theme } from '~/theme';

export default function TabLayout() {
  return (
    <Tabs
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
          tabBarIcon: ({ color }) => (
            <TranscriptionSheet width={30} height={30} fillColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="record"
        listeners={() => ({
          tabPress: (event) => {
            event.preventDefault();
            console.log('vai adicionar');
          },
        })}
        options={{
          title: '',
          tabBarIcon: ({ size, color }) => <PlusRecordMid size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={30} />,
        }}
      />
    </Tabs>
  );
}
