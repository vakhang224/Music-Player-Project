import { colors, fontSize } from "@/constants/tokens"
import { BlurView } from "expo-blur"
import { Tabs } from "expo-router"
import { StyleSheet, View } from "react-native"
import { FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6 } from "@expo/vector-icons"

const TabsNavigation = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarLabelStyle: {
                fontSize: fontSize.xs,
                fontWeight: '500',
            },
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                borderRadius: 40,
                height: 70,
                borderTopWidth: 0,
                paddingTop: 8,
                marginBottom: 20,
                paddingLeft: 5,
                backgroundColor: 'transparent'
            },
            tabBarBackground: () => (
                <View
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: '#1C1C1E', // Replace with any color you want
                        borderRadius: 40,
                        marginHorizontal: 5,
                        opacity: 0.95,
                    }}
                />
            )

        }}>
            <Tabs.Screen name="favorites"
                options={{
                    title: "Favorites",
                    tabBarIcon: ({ color }) =>
                        <FontAwesome name='heart' size={20} color={color} />
                }} />
            <Tabs.Screen name="playlists"
                options={{
                    title: "Playlists",
                    tabBarIcon: ({ color }) =>
                        <MaterialCommunityIcons name='playlist-play' size={28} color={color} />
                }} />
            <Tabs.Screen name="(songs)"
                options={{
                    title: "Songs",
                    tabBarIcon: ({ color }) =>
                        <Ionicons name='musical-notes-sharp' size={24} color={color} />
                }} />
            <Tabs.Screen name="artists"
                options={{
                    title: "Artists",
                    tabBarIcon: ({ color }) => <FontAwesome6 name='users-line' size={24} color={color} />
                }} />
        </Tabs>
    )
}

export default TabsNavigation