import React, { FunctionComponent } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// import { color } from '../../../const/variables';
// import AppIcon from '../icons/AppIcon';

import styles from './styles';

export type InputProps = {
    placeholder: string;
    testID: string;
    text: string;
    setText?: (text: string) => void;
    style?: ViewStyle;
    disableIcon?: boolean;
    disableClear?: boolean;
} & TextInputProps;

const Input: FunctionComponent<InputProps> = (props) => {
    const {
        style,
        placeholder = 'Upišite placeholder',
        testID = 'searchInput',
        text = '',
        setText = () => {},
        disableIcon = false,
        disableClear = false,
        ...restOfProps
    } = props;
    const inputRef = React.useRef<TextInput>(null);
    const [focused, setFocused] = React.useState(false);

    return (
        <View style={[styles.inputContainer, style]}>
            {disableIcon ? null : text.length > 0 || focused ? (
                <TouchableOpacity
                    testID="clearInput"
                    onPress={() => {
                        inputRef.current?.blur();
                        setText('');
                    }}>
                    <Ionicons name={'chevron-back'} color={'#ccc'} />
                </TouchableOpacity>
            ) : (
                <Ionicons name={'search'} />
            )}
            <View style={{ flex: 1 }}>
                <TextInput
                    testID={testID}
                    onChangeText={setText}
                    value={text}
                    placeholderTextColor={'#ccc'}
                    placeholder={placeholder}
                    style={styles.input}
                    {...restOfProps}
                    ref={inputRef}
                    onFocus={() => setFocused(true)}
                    onBlur={(e) => {
                        setFocused(false);
                        restOfProps?.onBlur?.(e);
                    }}
                />
            </View>
            {text.length > 0 && !disableClear && (
                <TouchableOpacity testID="clearInput" onPress={() => setText('')}>
                    <Ionicons name={'close'} />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Input;
