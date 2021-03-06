import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
    const { buttonStyle, buttonTextStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={buttonTextStyle}>Click me!</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    buttonTextStyle: {
        fontWeight: '600',
        alignSelf: 'center',
        color: '#007aff',
        paddingTop: 10,
        paddingBottom: 10,
    }
};

export default Button;