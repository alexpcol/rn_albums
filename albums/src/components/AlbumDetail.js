import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ data }) => {
    const { title,
        artist,
        thumbnail_image,
        image } = data;
    const { thumbnailImageStyle,
        albumImageStyle,
        textContainerStyle,
        imageContainerStyle,
        textTitleStyle, } = styles;
    return (
        <Card>
            <CardSection>
                <View style={imageContainerStyle}>
                    <Image style={thumbnailImageStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={textContainerStyle}>
                    <Text style={textTitleStyle}>
                        {title}
                    </Text>
                    <Text>
                        {artist}
                    </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={albumImageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button />
            </CardSection>
        </Card>
    );
};

const styles = {
    textContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textTitleStyle: {
        fontSize: 18,
    },
    thumbnailImageStyle: {
        height: 50,
        width: 50
    },
    albumImageStyle: {
        height: 300,
        width: null,
        flex: 1,
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
};

export default AlbumDetail;
