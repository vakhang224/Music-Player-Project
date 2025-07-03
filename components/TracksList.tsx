import { utilsStyles } from "@/styles";
import { FlatList, FlatListProps, View } from "react-native";
import { Track } from "react-native-track-player";
import { TracksListItem } from "./TracksListItem";

const ItemDivider = () => (
    <View style={{...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60}}/>
)

export type Props = Partial<FlatListProps<Track>> & {
    tracks: Track[];
};


export const TracksList = ({ tracks }: Props) => {
    return (
        <FlatList
            data={tracks}
            ItemSeparatorComponent={ItemDivider}
            renderItem={({ item: track }) => (
                <TracksListItem tracks={track} />
            )}
            scrollEnabled={false}
        />
    );
};
