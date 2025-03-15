import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

interface TabIconProps {
  icon: number;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => (
  <View className="flex flex-row items-center justify-center gap-1   rounded-md bg-purp">
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-8 h-8"
    />
  
  </View>
);

const TAB_CONFIG = [
  { name: "index", label: "Home", icon: icons.home },
  { name: "search", label: "Search", icon: icons.search },
  { name: "saved", label: "Saved", icon: icons.bookmark },
  { name: "profile", label: "Profile", icon: icons.profile },
] as const;

const TabLayout = () => {
  const renderTabScreen = (tabConfig: (typeof TAB_CONFIG)[number]) => (
    <Tabs.Screen
      key={tabConfig.name}
      name={tabConfig.name}
      options={{
        title: tabConfig.label,
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={tabConfig.icon}
            color={color}
            name={tabConfig.label}
            focused={focused}
          />
        ),
      }}
    />
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFAA33", // Gold color for active tabs
        tabBarInactiveTintColor: "#888899", // Grey for inactive
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          paddingVertical: 8,
          paddingHorizontal: 14,
          borderRadius: 14,
          marginHorizontal: 10,
          marginBottom: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.15,
          shadowRadius: 3,
          elevation: 2,
        },
      }}
    >
      {TAB_CONFIG.map(renderTabScreen)}
    </Tabs>
  );
};

export default TabLayout;
