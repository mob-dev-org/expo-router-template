import { Link } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export type indexProps = {};

const index = (props: indexProps) => {
    return (
        <View style={styles.container}>
            <Text>tabs component</Text>
            <Text>tabs component</Text>
            <Link href="/home">About</Link>
        </View>
    );
};

export default index;

const styles = StyleSheet.create({
    container: {},
});
