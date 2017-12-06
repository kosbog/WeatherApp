import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ headerText }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#C6C1D5',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2, // android only (?? research this)
        position: 'relative'
    }
});

export default Header;