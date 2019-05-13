import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { colors } from './config';

import { AppContainer } from './components/common';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <AppContainer
                headerText="Lost on youuuuuu!!!"
                containerBackgroundColor={colors.alabasterWhite}
                headerBackgroundColor={colors.deepChestnutRed}
            >
                <View style={styles.containerStyle}>
                    <View>
                        <Text>All i ever wanted was you</Text>
                        <Text>All i ever wanted was you</Text>
                        <Text>All i ever wanted was you</Text>
                        <Text>All i ever wanted was you</Text>
                    </View>
                    <View>
                        <Text>All i ever wanted was you</Text>
                        <Text>All i ever wanted was you</Text>
                        <Text>All i ever wanted was you</Text>
                        <Text>All i ever wanted was you</Text>
                    </View>
                </View>
            </AppContainer>
        </Provider>
    );
};

const styles = StyleSheet.create({

    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    }
});

export default App;