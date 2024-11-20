import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Actions from "./Views/Actions";
import Home from "./Views/Home";
import Chat from "./Views/Chat";
import Pay from "./Views/Pay";
import Profile from "./Views/Profile";
import GoBike from './Views/GoBike'
import GoCar from './Views/GoCar'
import GoFood from './Views/GoFood'
import GoSend from './Views/GoSend'
import Viewgosend from "./Views/Viewgosend";
import viewGoFood from "./Views/viewGoFood";
import thanhcong from "./Views/thanhcong";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Actions"
        component={Actions}
        options={{
          tabBarLabel: "Hoạt động",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-list"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: "Tin nhắn",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          tabBarLabel: "Thanh toán",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="credit-card"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={BottomTab} />
        <Stack.Screen name='GoBike' component={GoBike} />
        <Stack.Screen name="GoCar" component={GoCar} />
        <Stack.Screen name="GoFood" component={GoFood} />
        <Stack.Screen name="GoSend" component={GoSend} />
        <Stack.Screen name='Viewgosend' component={Viewgosend}/>
        <Stack.Screen name='viewGoFood' component={viewGoFood}/>
        <Stack.Screen name='thanhcong' component={thanhcong}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;

