import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.read}>ReadStoryScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    read: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'brown',
        alignSelf: 'center',
        alignItems: 'center',
    }
})