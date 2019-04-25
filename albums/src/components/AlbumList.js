import React, { Component } from 'react';
import { ScrollView } from 'react-native';
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
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView style={{ marginBottom: 30 }}>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
