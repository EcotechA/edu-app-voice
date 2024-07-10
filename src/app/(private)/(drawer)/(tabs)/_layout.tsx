import { Feather } from '@expo/vector-icons';
import { Tabs, router } from 'expo-router';

import PlusRecordMid from '~/src/components/Icons/PlusRecordMid';
import TranscriptionSheet from '~/src/components/Icons/TranscriptionSheet';
import TabIcon from '~/src/components/TabIcon';
import { theme } from '~/theme';

export default function TabLayout() {
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
              console.log('vai adicionar');
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
    </>
  );
}
