import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Header } from '../common';
import StatusBar from '../../styles/statusBar/GeneralStatusBarColor';

const AppContainer = ({ children,
    containerBackgroundColor,
    headerBackgroundColor,
    headerText }) => {
    return (
        <View style={[{ backgroundColor: containerBackgroundColor, flex: 1 }]}>
            <StatusBar
                backgroundColor="#772ea2"
                barStyle="light-content"
            />
            <SafeAreaView >
                <Header headerText={headerText} headerBackgroundColor={headerBackgroundColor} />
                <View style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: containerBackgroundColor }}>
                    {children}
                </View>
            </SafeAreaView>
        </View>
    );
}

export { AppContainer };