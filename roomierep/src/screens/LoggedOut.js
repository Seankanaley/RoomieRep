import React, { Component } from 'react';
import Colors from '../styles/colors';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../styles/colors';

class LoggedOut extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Image
                    source={require('../img/airbnb-logo.png')} 
                    style={styles.logo}
                    
                    />
                    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01,
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40
    }
});

export default LoggedOut;