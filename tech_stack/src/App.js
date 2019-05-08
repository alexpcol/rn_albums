import React from 'react';
import { Text, View } from 'react-native';
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
                <View>
                    <Text>All i ever wanted was you</Text>
                    <Text>All i ever wanted was you</Text>
                    <Text>All i ever wanted was you</Text>
                    <Text>All i ever wanted was you</Text>
                </View>
            </AppContainer>
        </Provider>
    );
};

export default App;