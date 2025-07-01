import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { colors, fontSize } from "./tokens";

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
    headerLargeTitle: false,
    headerLargeStyle: {
        backgroundColor: colors.background,
    },
    headerTitleStyle: {
        fontSize: fontSize.lg,
    },
    headerLargeTitleStyle: {
        color: colors.text,
    },
    headerTitleAlign: "center",
    headerTintColor: colors.text,
    headerTransparent: true,
    headerBlurEffect: "prominent",
    headerShadowVisible: false,
}