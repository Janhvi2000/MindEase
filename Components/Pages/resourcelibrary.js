import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView, Linking, ActivityIndicator } from 'react-native';
import styles from '../Styles/styles';
import left from '../Pictures/left.png';
import right from '../Pictures/right.png';

const Resource = () => {
    const [thumbnails, setThumbnails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [playlistIds, setPlaylistIds] = useState(['PLiUrrIiqidTVOFopSNaKy6ieGbmuhkxQw','PLiUrrIiqidTVNQB5GrD2uh-bmfUGGwh-z','PLiUrrIiqidTUau5F7ckXIY4G1Z0a96Cb3','PLiUrrIiqidTVJb2Hyr4ZVeupaMH9QY7WP','PLiUrrIiqidTWzA6zfTpCR7GgvOUAbtl6f','PLiUrrIiqidTWDEMxBpCxxr2_H1fFRkg2z']);
    const [selectedSeedIndex, setSelectedSeedIndex] = useState(0);
    const apiKey = 'AIzaSyC0ncixno6iS_g7ilMKPTiZ4MtIGdp90ww';

    useEffect(() => {
        const getThumbnails = async () => {
            try {
                const allThumbnails = [];

                const currentPlaylistId = playlistIds[selectedSeedIndex];
                const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=2&playlistId=${currentPlaylistId}&key=${apiKey}`);
                const data = await response.json();

                if (data && data.items) {
                    const videoIds = data.items.map(item => item.snippet.resourceId.videoId);

                    for (const videoId of videoIds) {
                        const videoResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`);
                        const videoData = await videoResponse.json();

                        if (videoData && videoData.items && videoData.items.length > 0) {
                            const thumbnailUrl = videoData.items[0].snippet.thumbnails.default.url;
                            console.log(thumbnailUrl);
                            allThumbnails.push(thumbnailUrl);
                        }
                    }
                } else {
                    console.error('No items found in the response:', data);
                }

                setThumbnails(allThumbnails);
                setLoading(false);

            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        getThumbnails();
    }, [playlistIds, selectedSeedIndex]);

    const openVideo = (thumbnailUrl) => {
        const videoIdMatch = thumbnailUrl.match(/\/vi\/(.+?)\/default\.jpg/);
        if (videoIdMatch && videoIdMatch[1]) {
            const videoId = videoIdMatch[1];
            Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`);
        } else {
            console.error('Unable to extract video ID from the thumbnail URL:', thumbnailUrl);
        }
    };

    const goToNextSeed = () => {
        setSelectedSeedIndex((prevIndex) => (prevIndex + 1) % playlistIds.length);
    };

    const goToPreviousSeed = () => {
        setSelectedSeedIndex((prevIndex) => (prevIndex - 1 + playlistIds.length) % playlistIds.length);
    };

    return (
            <View>
            {loading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#9985FF" />
                </View>
            ) : (
                <View horizontal style={styles.container3}>
                <TouchableOpacity onPress={goToPreviousSeed} style={styles.arrowButton}>
                        <Image source={left} style={styles.arrowIcon} />
                    </TouchableOpacity>

                    {thumbnails.map((thumbnail, index) => (
                        <TouchableOpacity key={index} onPress={() => openVideo(thumbnail)}>
                            <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity onPress={goToNextSeed} style={styles.arrowButton}>
                        <Image source={right} style={styles.arrowIcon} />
                    </TouchableOpacity>
                </View>
                
            )}
            </View>
        
    );
};

export default Resource;
