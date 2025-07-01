import { Track } from "@/assets/data/Track"
import { FlatList, Text, View } from "react-native"
import { TracksListItem } from "./TracksListItem";
import { utilsStyles } from "@/styles";

const ItemDivider = () => (
    <View style={{...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60}}/>
)

export type Props = {
    tracks: Track[];
};


export const TracksList = ({ tracks }: Props) => {
    return (
        <FlatList
            data={tracks}
            ItemSeparatorComponent={ItemDivider}
            keyExtractor={(item) => item.id}
            renderItem={({ item: track }) => (
                <TracksListItem tracks={[track]} />
            )}
            scrollEnabled={false}
        />
    );
};
