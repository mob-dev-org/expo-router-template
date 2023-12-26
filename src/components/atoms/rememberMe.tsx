import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '@src/constants/colors';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function RememberMeButton() {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
        AsyncStorage.setItem('rememberMe', 'true');
    };

    return (
        <View style={styles.container}>
            <CheckBox
                title="Zapamti me"
                checked={isChecked}
                onPress={toggleCheckBox}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
                size={30}
                checkedColor={colors.blue}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        marginLeft: 0,
    },
    checkboxText: {
        fontSize: 16,
        fontWeight: 'normal',
    },
});
