import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    // eslint-disable-next-line no-undef
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} data={album} />);
        const che = {
            title: 'hello',
            artist: 'Adele',
            image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg',
            url: 'https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6',
            thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg'
        };
        return (
            <AlbumDetail key={che.title} data={che} />

        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
