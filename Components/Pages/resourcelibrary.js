import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

const Resource = () => {
    const [thumbnails, setThumbnails] = useState([]);

    const apiKey = 'AIzaSyC0ncixno6iS_g7ilMKPTiZ4MtIGdp90ww';
    const playlistId = 'PLiUrrIiqidTVghUckAJjCZMYO84ahohMv';      

    useEffect(() => {
        const getThumbnails = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`);
                const data = await response.json();

                if (data && data.items) {
                    const videoIds = data.items.map(item => item.snippet.resourceId.videoId);

                    const thumbnailUrls = [];

                    for (const videoId of videoIds) {
                        const videoResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`);
                        const videoData = await videoResponse.json();

                        if (videoData && videoData.items && videoData.items.length > 0) {
                            const thumbnailUrl = videoData.items[0].snippet.thumbnails.default.url;
                            thumbnailUrls.push(thumbnailUrl);
                        }
                    }

                    setThumbnails(thumbnailUrls);
                } else {
                    console.error('No items found in the response:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getThumbnails();
    }, []);

    const openVideo = (videoId) => {
        Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                {thumbnails.map((thumbnail, index) => (
                    <TouchableOpacity key={index} onPress={() => openVideo(thumbnails[index])}>
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
        width: 100,
        height: 100,
        margin: 10,
    },
});

export default Resource;
