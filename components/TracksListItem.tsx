import { Track } from "@/assets/data/Track";
import { unknownTracksImageUri } from "@/constants/images";
import { colors, fontSize } from "@/constants/tokens";
import { defaultStyles } from "@/styles";
import React from "react"
import { Image, TouchableHighlight, View, StyleSheet, Text } from "react-native"

export type Props = {
    tracks: Track[];
}

export const TracksListItem = ({ tracks }: Props) => {
    const isActiveTrack = false;
    return (
        <TouchableHighlight>
            <View style={styles.trackItemContainer}>
                <View>
                    <Image
                        source={{
                            uri: tracks[0].artwork ?? unknownTracksImageUri,
                        }}
                        style={{
                            ...styles.trackArtworkImage,
                            opacity: isActiveTrack ? 0.6 : 1,
                        }}
                    />
                </View>
                <View style={{ width: '100%' }}>
                    <Text
                        numberOfLines={1}
                        style={{
                            ...styles.trackTitleText,
                            color: isActiveTrack ? colors.primary : colors.text,
                        }}>
                        {tracks[0].title}
                    </Text>
                    {tracks[0].artist && (
                        <Text
                            numberOfLines={1}
                            style={styles.trackArtistText}>
                            {tracks[0].artist}
                        </Text>
                    )}
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    trackArtworkImage: {
        borderRadius: 8,
        width: 50,
        height: 50,
    },
    trackTitleText: {
        ...defaultStyles.text,
        fontSize: fontSize.sm,
        fontWeight: "600",
        maxWidth: '90%',
    },
    trackArtistText: {
        ...defaultStyles.text,
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4,
    },
    trackItemContainer:{
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 20,
        columnGap: 12,
    }
});