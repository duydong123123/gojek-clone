import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // Sử dụng createStackNavigator thay vì createNativeStackNavigator
import { MaterialIcons, Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';

// Import các màn hình
import { Home, DonHang, HopThu, UuDai, TaiKhoan, DatGojek, Gocar, Gofood, Gosend } from "./view/index";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
    backgroundColor: 'white',
    paddingTop: 10,
  },
};

// Component Tab Icon
const TabIcon = ({ focused, name, label, IconComponent }) => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <IconComponent name={name} size={24} color={focused ? '#88b77b' : 'black'} />
    <Text style={{ fontSize: 12, color: focused ? '#88b77b' : '#16247d' }}>{label}</Text>
  </View>
);

// Stack cho màn hình Home và các màn hình con
function StackHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trang Chủ" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Thông Tin Tài Khoản" component={TaiKhoan} />
      <Stack.Screen name="Gojek" component={DatGojek} />
      <Stack.Screen name="Gocar" component={Gocar} />
      <Stack.Screen name="Gofood" component={Gofood} />
      <Stack.Screen name="Gosend" component={Gosend} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={StackHome}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="home" label="Trang Chủ" IconComponent={Entypo} />
            ),
          }}
        />
        <Tab.Screen
          name="UuDai"
          component={UuDai}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="gift" label="Ưu Đãi" IconComponent={AntDesign} />
            ),
          }}
        />
        <Tab.Screen
          name="DonHang"
          component={DonHang}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="clipboard-list" label="Đơn Hàng" IconComponent={FontAwesome5} />
            ),
          }}
        />
        <Tab.Screen
          name="HopThu"
          component={HopThu}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="message" label="Hộp Thư" IconComponent={MaterialIcons} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
