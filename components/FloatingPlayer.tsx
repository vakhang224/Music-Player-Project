import { unknownTracksImageUri } from "@/constants/images";
import { useLastActiveTrack } from "@/hooks/useLastActiveTrack";
import { defaultStyles } from "@/styles";
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewProps } from "react-native";
import { useActiveTrack } from "react-native-track-player";
import { PlayPauseButton, SkipToNextButton } from "./PlayerControl";

export const FloatingPlayer = ({ style }: ViewProps) => {
  const activeTrack = useActiveTrack();
  const lastActiveTrack = useLastActiveTrack();

  const displayTrack = activeTrack ?? lastActiveTrack

  if (!displayTrack) return null
  return (
    <TouchableOpacity activeOpacity={0.9} style={[
      styles.container, style
    ]}>
      <>
        <Image source={{ uri: displayTrack.artwork ?? unknownTracksImageUri }}
          style={styles.trackArtwork}
        />

        <View style={styles.trackTitleContainer}>
          <Text style={styles.trackTitle}>{displayTrack.title}</Text>
        </View>

        <View style={styles.trackControl}>
          <PlayPauseButton iconSize={24} />
          <SkipToNextButton iconSize={24} />
        </View>
      </>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252525',
    padding: 8,
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 15
  },
  trackArtwork: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  trackTitle: {
    ...defaultStyles.text,
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 10,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: 'hidden',
    marginLeft: 10,
  },
  trackControl: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    marginRight: 16,
    paddingLeft: 16,
  }
})