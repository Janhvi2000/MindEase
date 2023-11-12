import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

const Resource = () => {
    const [thumbnails, setThumbnails] = useState([]);
    const [playlistIds, setPlaylistIds] = useState(['PLiUrrIiqidTVOFopSNaKy6ieGbmuhkxQw','PLiUrrIiqidTVNQB5GrD2uh-bmfUGGwh-z','PLiUrrIiqidTUau5F7ckXIY4G1Z0a96Cb3','PLiUrrIiqidTVJb2Hyr4ZVeupaMH9QY7WP','PLiUrrIiqidTWzA6zfTpCR7GgvOUAbtl6f','PLiUrrIiqidTWDEMxBpCxxr2_H1fFRkg2z']);
    const apiKey = 'AIzaSyC0ncixno6iS_g7ilMKPTiZ4MtIGdp90ww';

    useEffect(() => {
        const getThumbnails = async () => {
            try {
                const allThumbnails = [];

                for (const currentPlaylistId of playlistIds) {
                    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${currentPlaylistId}&key=${apiKey}`);
                    const data = await response.json();

                    if (data && data.items) {
                        const videoIds = data.items.map(item => item.snippet.resourceId.videoId);

                        for (const videoId of videoIds) {
                            const videoResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`);
                            const videoData = await videoResponse.json();

                            if (videoData && videoData.items && videoData.items.length > 0) {
                                const thumbnailUrl = videoData.items[0].snippet.thumbnails.default.url;
                                allThumbnails.push(thumbnailUrl);
                                console.log("thumbnail", thumbnailUrl);
                            }
                        }
                    } else {
                        console.error('No items found in the response:', data);
                    }
                }

                setThumbnails(allThumbnails);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getThumbnails();
    }, [playlistIds]);

    const openVideo = (thumbnailUrl) => {
        const videoIdMatch = thumbnailUrl.match(/\/vi\/(.+?)\/default\.jpg/);
        if (videoIdMatch && videoIdMatch[1]) {
            const videoId = videoIdMatch[1];
            Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`);
        } else {
            console.error('Unable to extract video ID from the thumbnail URL:', thumbnailUrl);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                {thumbnails.map((thumbnail, index) => (
                    <TouchableOpacity key={index} onPress={() => openVideo(thumbnail)}>
                        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    thumbnail: {
        width: 150,
        height: 150,
        margin: 10,
        resizeMode: 'contain',
    },
});

export default Resource;
