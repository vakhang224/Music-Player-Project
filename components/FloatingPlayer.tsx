import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Track } from '@/assets/data/Track';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  track: Track;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
};

export const FloatingPlayer: React.FC<Props> = ({
  track,
  isPlaying,
  onPlayPause,
  onNext,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        margin: 16,
        padding: 12,
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 6,
      }}
    >
      <Image
        source={{ uri: track.artwork }}
        style={{ width: 48, height: 48, borderRadius: 6, marginRight: 12 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }} numberOfLines={1}>
          {track.title}
        </Text>
        <Text style={{ color: '#aaa', fontSize: 12 }} numberOfLines={1}>
          {track.artist}
        </Text>
      </View>
      <TouchableOpacity onPress={onPlayPause} style={{ marginHorizontal: 10 }}>
        <Ionicons
          name={isPlaying ? 'pause' : 'play'}
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <Ionicons name="play-skip-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
