// Import a library to help create a component
import React from 'react';
import { AppRegistry, View, SafeAreaView, ScrollView } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create component
const App = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
            <SafeAreaView>
                <Header headerText={'Albums!!'} />
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <AlbumList />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

AppRegistry.registerComponent('albums', () => App);

