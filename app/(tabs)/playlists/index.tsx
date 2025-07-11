import { colors, fontSize } from "@/constants/tokens"
import { defaultStyles } from "@/styles"
import { Text, View } from "react-native"

const PlaylistsScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <Text style={{ color: colors.text , fontSize: fontSize.lg, textAlign: "center", fontWeight:700, marginBottom:20, marginTop:50}}>Playlists</Text>
        </View>
    )
}

export default PlaylistsScreen