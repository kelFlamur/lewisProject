import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createSwitchNavigator } from 'react-navigation'

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";
import Scriptures from "../screens/Scriptures";

import FirstDay from "../screens/FirstDay";
import FirstDayMorning from "../screens/morningAfternoon/FirstDayMorning";
import FirstDayAfternoon from "../screens/morningAfternoon/FirstDayAfternoon";
import FirstDayEvening from "../screens/morningAfternoon/FirstDayEvening";


import SecondDay from "../screens/SecondDay";
import SecondDayMorning from "../screens/morningAfternoon/SecondDayMorning";
import SecondDayAfternoon from "../screens/morningAfternoon/SecondDayAfternoon";
import SecondDayEvening from "../screens/morningAfternoon/SecondDayEvening";

import ThirdDay from "../screens/ThirdDay";
import ThirdDayMorning from "../screens/morningAfternoon/ThirdDayMorning";
import ThirdDayAfternoon from "../screens/morningAfternoon/ThirdDayAfternoon";
import ThirdDayEvening from "../screens/morningAfternoon/ThirdDayEvening";

import FourthDay from "../screens/FourthDay";
import FourthDayMorning from "../screens/morningAfternoon/FourthDayMorning";
import FourthDayAfternoon from "../screens/morningAfternoon/FourthDayAfternoon";
import FourthDayEvening from "../screens/morningAfternoon/FourthDayEvening";

import FifthDay from "../screens/FifthDay";
import FifthDayMorning from "../screens/morningAfternoon/FifthDayMorning";
import FifthDayAfternoon from "../screens/morningAfternoon/FifthDayAfternoon";
import FifthDayEvening from "../screens/morningAfternoon/FifthDayEvening";

import SixthDay from "../screens/SixthDay";
import SixthDayMorning from "../screens/morningAfternoon/SixthDayMorning";
import SixthDayAfternoon from "../screens/morningAfternoon/SixthDayAfternoon";
import SixthDayEvening from "../screens/morningAfternoon/SixthDayEvening";

import SeventhDay from "../screens/SeventhDay";
import SeventhDayMorning from "../screens/morningAfternoon/SeventhDayMorning";
import SeventhDayAfternoon from "../screens/morningAfternoon/SeventhDayAfternoon";
import SeventhDayEvening from "../screens/morningAfternoon/SeventhDayEvening";

import EighthDay from "../screens/EighthDay";
import EighthDayMorning from "../screens/morningAfternoon/EighthDayMorning";
import EighthDayAfternoon from "../screens/morningAfternoon/EighthDayAfternoon";
import EighthDayEvening from "../screens/morningAfternoon/EighthDayEvening";

import NinthDay from "../screens/NinthDay";
import NinthDayMorning from "../screens/morningAfternoon/NinthDayMorning";
import NinthDayAfternoon from "../screens/morningAfternoon/NinthDayAfternoon";
import NinthDayEvening from "../screens/morningAfternoon/NinthDayEvening";

import Account from "../screens/Account";
// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";
import { argonTheme, tabs } from "../constants";
import App from "../App";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Elements"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Elements" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

//First Day
function FirstDayStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="FirstDay"
        component={FirstDay}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="First Day"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function FirstDayMorningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="FirstDayMorning"
        component={FirstDayMorning}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="First Day Morning"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function FirstDayAfternoonStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="FirstDayAfternoon"
        component={FirstDayAfternoon}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="First Day Afternoon"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function FirstDayEveningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="FirstDayEvening"
        component={FirstDayEvening}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="First Day Evening"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

//Second day
function SecondDayStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="SecondDay"
        component={SecondDay}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Second Day"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function SecondDayMorningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="SecondMorning"
        component={SecondDayMorning}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Second Day Morning"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function SecondDayAfternoonStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="SecondDayAfternoon"
        component={SecondDayAfternoon}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Second Day Afternoon"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}
function SecondDayEveningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="SecondDayEvening"
        component={SecondDayEvening}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Second Day Evening"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

//Third day
function ThirdDayStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="ThirdDay"
        component={ThirdDay}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Third Day"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function ThirdDayMorningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="ThirdMorning"
        component={ThirdDayMorning}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Third Day Morning"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function ThirdDayAfternoonStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="ThirdDayAfternoon"
        component={ThirdDayAfternoon}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Third Day Afternoon"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}
function ThirdDayEveningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="ThirdDayEvening"
        component={ThirdDayEvening}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Third Day Evening"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

//Fourth Day
function FourthDayStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="FourthDay"
        component={FourthDay}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Fourth Day"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function FourthDayMorningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="FourthMorning"
        component={FourthDayMorning}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Fourth Day Morning"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function FourthDayAfternoonStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="FourthDayAfternoon"
        component={FourthDayAfternoon}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Fourth Day Afternoon"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}
function FourthDayEveningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="FourthDayEvening"
        component={FourthDayEvening}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Fourth Day Evening"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

//Fifth Day
function FifthDayStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="FifthDay"
        component={FifthDay}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Fifth Day"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function FifthDayMorningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="FifthMorning"
        component={FifthDayMorning}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Fifth Day Morning"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function FifthDayAfternoonStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="FifthDayAfternoon"
        component={FifthDayAfternoon}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Fifth Day Afternoon"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function FifthDayEveningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="FifthDayEvening"
        component={FifthDayEvening}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Fifth Day Evening"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

//Sixth Day
function SixthDayStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="SixthDay"
        component={SixthDay}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Sixth Day"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function SixthDayMorningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="SixthMorning"
        component={SixthDayMorning}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Sixth Day Morning"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function SixthDayAfternoonStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="SixthDayAfternoon"
        component={SixthDayAfternoon}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Sixth Day Afternoon"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function SixthDayEveningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="SixthDayEvening"
        component={SixthDayEvening}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Sixth Day Evening"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

// Seventh Day
function SeventhDayStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="SeventhDay"
        component={SeventhDay}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Seventh Day"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function SeventhDayMorningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="SeventhMorning"
        component={SeventhDayMorning}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Seventh Day Morning"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function SeventhDayAfternoonStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="SeventhDayAfternoon"
        component={SeventhDayAfternoon}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Seventh Day Afternoon"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function SeventhDayEveningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="SeventhDayEvening"
        component={SeventhDayEvening}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Seventh Day Evening"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

// Eighth Day
function EighthDayStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="EighthDay"
        component={EighthDay}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Eighth Day"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function EighthDayMorningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="EighthMorning"
        component={EighthDayMorning}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Eighth Day Morning"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function EighthDayAfternoonStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="EighthDayAfternoon"
        component={EighthDayAfternoon}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Eighth Day Afternoon"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function EighthDayEveningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="EighthDayEvening"
        component={EighthDayEvening}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Eighth Day Evening"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

// Ninth Day
function NinthDayStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="NinthDay"
        component={NinthDay}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Ninth Day"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function NinthDayMorningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="NinthMorning"
        component={NinthDayMorning}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Ninth Day Morning"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function NinthDayAfternoonStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="NinthDayAfternoon"
        component={NinthDayAfternoon}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Ninth Day Afternoon"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function NinthDayEveningStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="NinthDayEvening"
        component={NinthDayEvening}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Ninth Day Evening"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function ScripturesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Sciptures"
        component={Scriptures}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Sciptures"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    
    </Stack.Navigator>
  );
}

export const AppStack = (props) => (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Scriptures" component={ScripturesStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Account" component={Account} />

      <Drawer.Screen name="FirstDay" component={FirstDayStack} />
      <Drawer.Screen name="FirstDayMorning" component={FirstDayMorningStack} />
      <Drawer.Screen name="FirstDayAfternoon" component={FirstDayAfternoonStack} />
      <Drawer.Screen name="FirstDayEvening" component={FirstDayEveningStack} />


      <Drawer.Screen name="SecondDay" component={SecondDayStack} />
      <Drawer.Screen name="SecondDayMorning" component={SecondDayMorningStack} />
      <Drawer.Screen name="SecondDayAfternoon" component={SecondDayAfternoonStack} />
      <Drawer.Screen name="SecondDayEvening" component={SecondDayEveningStack} />

      <Drawer.Screen name="ThirdDay" component={ThirdDayStack} />
      <Drawer.Screen name="ThirdDayMorning" component={ThirdDayMorningStack} />
      <Drawer.Screen name="ThirdDayAfternoon" component={ThirdDayAfternoonStack} />
      <Drawer.Screen name="ThirdDayEvening" component={ThirdDayEveningStack} />

      <Drawer.Screen name="FourthDay" component={FourthDayStack} />
      <Drawer.Screen name="FourthDayMorning" component={FourthDayMorningStack} />
      <Drawer.Screen name="FourthDayAfternoon" component={FourthDayAfternoonStack} />
      <Drawer.Screen name="FourthDayEvening" component={FourthDayEveningStack} />

      <Drawer.Screen name="FifthDay" component={FifthDayStack} />
      <Drawer.Screen name="FifthDayMorning" component={FifthDayMorningStack} />
      <Drawer.Screen name="FifthDayAfternoon" component={FifthDayAfternoonStack} />
      <Drawer.Screen name="FifthDayEvening" component={FifthDayEveningStack} />

      <Drawer.Screen name="SixthDay" component={SixthDayStack} />
      <Drawer.Screen name="SixthDayMorning" component={SixthDayMorningStack} />
      <Drawer.Screen name="SixthDayAfternoon" component={SixthDayAfternoonStack} />
      <Drawer.Screen name="SixthDayEvening" component={SixthDayEveningStack} />

      <Drawer.Screen name="SeventhDay" component={SeventhDayStack} />
      <Drawer.Screen name="SeventhDayMorning" component={SeventhDayMorningStack} />
      <Drawer.Screen name="SeventhDayAfternoon" component={SeventhDayAfternoonStack} />
      <Drawer.Screen name="SeventhDayEvening" component={SeventhDayEveningStack} />

      <Drawer.Screen name="EighthDay" component={EighthDayStack} />
      <Drawer.Screen name="EighthDayMorning" component={EighthDayMorningStack} />
      <Drawer.Screen name="EighthDayAfternoon" component={EighthDayAfternoonStack} />
      <Drawer.Screen name="EighthDayEvening" component={EighthDayEveningStack} />

      <Drawer.Screen name="NinthDay" component={NinthDayStack} />
      <Drawer.Screen name="NinthDayMorning" component={NinthDayMorningStack} />
      <Drawer.Screen name="NinthDayAfternoon" component={NinthDayAfternoonStack} />
      <Drawer.Screen name="NinthDayEvening" component={NinthDayEveningStack} />
      
    </Drawer.Navigator>
  );


export const SwitchNavigator = createSwitchNavigator(
  {
      Login: {
          screen: Login
      },
      Signup: {
          screen: Signup
      },
  },
  {
      initialRouteName: 'Login'
  }
)




