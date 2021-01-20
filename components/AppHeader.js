import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.head}>STORY HUB</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    head: {
        backgroundColor: 'pink',
        padding: 10,
        paddingBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    }
})