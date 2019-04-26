import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>

    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        marginBottom: 15
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
};
// Justify-content: its for the vertical axis! flex-start, center, flex-end
// alignItems: its for the horizontal axis! flex-start, center, flex-end
//Make the component available to other parts of the app 
export { Header };
