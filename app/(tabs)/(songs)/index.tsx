import { useEffect, useState } from "react";
import { ScrollView, View, Platform, ActivityIndicator, Text } from "react-native";
import { Track } from "@/assets/data/Track";
import { TracksList } from "@/components/TracksList";
import { SearchBar } from "@/components/SearchBar";
import { colors, fontSize, screenPadding } from "@/constants/tokens";
import { navigationSearch } from "@/hooks/navigationSearch";
import { fetchTracks } from "@/services/trackService";
import { defaultStyles } from "@/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SongsScreen = () => {
  const { search, setSearch } = navigationSearch({
    searchBarOptions: {
      placeholder: "Search songs",
    },
  });

  const [tracks, setTracks] = useState<Track[]>([]);
  const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTracks = async () => {
      try {
        const data = await fetchTracks();
        setTracks(data);
        setFilteredTracks(data); // gán luôn cho danh sách lọc
      } catch (error) {
        console.error("Error fetching tracks:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTracks();
  }, []);

  // Lọc khi search thay đổi
  useEffect(() => {
    if (!search.trim()) {
      setFilteredTracks(tracks);
    } else {
      const query = search.toLowerCase();
      const filtered = tracks.filter((track) =>
        track.title.toLowerCase().includes(query)
      );
      setFilteredTracks(filtered);
    }
  }, [search, tracks]);

  const insets = useSafeAreaInsets();

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: screenPadding.horizontal,
          paddingBottom: 100, // Add some padding so it can scroll above tab bar
        }}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ color: colors.text , fontSize: fontSize.lg, textAlign: "center", fontWeight:700, marginBottom:20, marginTop:50}}>Songs</Text>

        {Platform.OS === "android" && (
          <SearchBar
            value={search}
            onChangeText={setSearch}
            placeholder="Search songs"
          />
        )}

        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <TracksList tracks={filteredTracks} />
        )}
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
