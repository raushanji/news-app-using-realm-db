import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Headline from '../app/screens/Headline';
import Bookmark from '../app/screens/Bookmark';
import Images from '../utils/images';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={{unmountOnBlur: true}}>
      <Tab.Screen
        name="Headlines"
        component={Headline}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                tintColor={focused ? 'blue' : 'grey'}
                source={Images.HEADLINES}
                style={{width: 28, height: 28}}
              />
            );
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmark}
        options={{
          title: 'My Bookmarks',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                tintColor={focused ? 'blue' : 'grey'}
                source={Images.BOOKMARK1}
                style={{width: 28, height: 28}}
              />
            );
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
        }}
      />
    </Tab.Navigator>
  );
}
