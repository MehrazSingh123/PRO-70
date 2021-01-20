import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <View>

                <AppHeader />

                <TextInput
                    style={styles.inputbox}

                    onChangeText={(text) => {
                        this.setState({
                            text: text
                        });
                    }}

                    placeholder={"Story Title..."}

                    value={this.state.text}
                />

                <TextInput
                    style={styles.inputbox}

                    onChangeText={(text) => {
                        this.setState({
                            text: text
                        });
                    }}

                    placeholder={"Author..."}

                    value={this.state.text}
                />

                <TextInput
                    style={styles.storybox}

                    onChangeText={(text) => {
                        this.setState({
                            text: text
                        });
                    }}

                    placeholder={"Write Your Story..."}

                    multiline={true}

                    value={this.state.text}
                />

                <TouchableOpacity style={styles.submit}>
                    <Text style={styles.fontLine}>SUBMIT</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputbox: {
        marginTop: 30,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        borderWidth: 2,
        outline: 'none',
        textAlign: 'left'
    },
    storybox: {
        marginTop: 30,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        borderWidth: 2,
        outline: 'none',
        paddingBottom: 150,
        textAlign: 'left'
    },
    submit: {
        backgroundColor: 'pink',
        marginTop: 50,
        padding: 16,
        borderRadius: 20,
        textAlign: 'center',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: 550
    },
    fontLine: {
        fontFamily: 'amita',
        fontWeight: 'bold',
    }
})