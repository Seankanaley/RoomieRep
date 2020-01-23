import React, { Component } from 'react';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundedButton from '../components/buttons/RoundedButton';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

class LoggedOut extends Component {
    onFaceBookPress() {
        alert('Facebook Button Pressed');
    }

    onCreateAccountPress() {
        alert('Create Account Pressed');
    }
    onMoreOptionsPress() {
        alert('More Options Pressed');
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image
                        source={require('../img/airbnb-logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.welcomeText}>Finding A Better Roomate Starts Here.</Text>
                    <RoundedButton
                        text="Continue With Facebook"
                        textColor={colors.green01}
                        background={colors.white}
                        icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
                        handleOnPress={this.onFaceBookPress}
                    />
                    <RoundedButton
                        text="Create Account"
                        textColor={colors.white}
                        handleOnPress={this.onCreateAccountPress}
                    />

                    <TouchableHighlight
                        style={styles.moreOptionsButton}
                        onPress={this.onMoreOptionsPress}
                    >
                        <Text style={styles.moreOptionsButtonText}>More options</Text>
                    </TouchableHighlight>
                    <View style={styles.termsAndConditions}>
                        <Text style={styles.termsText}>By tapping Continue, Create Account or More Options. </Text>
                        <Text style={styles.termsText}>I agree to Roomache's </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Payments Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Privacy Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <Text style={styles.termsText}> and </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Nondiscrimination Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>.</Text>
                    </View>
                </View>
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
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20,
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 30
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 20,
        zIndex: 8,
    },
    moreOptionsButton: {
        marginTop: 15,

    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30
    },
    termsText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: '600',

    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
});

export default LoggedOut;