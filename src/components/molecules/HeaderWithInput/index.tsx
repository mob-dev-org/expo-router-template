import { useNavigation } from '@react-navigation/native';
import { forwardRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Input from '@src/components/atoms/Input';
import { shadow } from '@src/styles/helpers';

import styles from './styles';

export type HeaderWithInputProps = {
    placeholderText?: string;
    testID?: string;
    text?: string;
    setText?: (text: string) => void;
    backBtn?: boolean;
};

export type HeaderWithInputRef = {
    text: string;
};

const BackBtn = () => {
    const { goBack } = useNavigation();

    return (
        <TouchableOpacity
            testID="backBtn"
            onPress={goBack}
            hitSlop={{ top: 24, left: 24, bottom: 24, right: 24 }}>
            <Ionicons name="chevron-back" />
        </TouchableOpacity>
    );
};

const HeaderWithInput = forwardRef<HeaderWithInputRef | undefined, HeaderWithInputProps>(
    (
        {
            placeholderText = 'Upišite otpad koji želite razvrstat',
            testID = 'searchInput',
            text = '',
            backBtn = false,
            setText = () => {},
        },
        ref,
    ) => {
        const { top } = useSafeAreaInsets();

        return (
            <View
                testID="headerWithInput"
                style={[styles.container, { paddingTop: top + (backBtn ? 8 : 0) }, shadow]}>
                {backBtn && <BackBtn />}

                <Input
                    placeholder={placeholderText}
                    testID={testID}
                    text={text}
                    setText={setText}
                />
            </View>
        );
    },
);

HeaderWithInput.displayName = 'HeaderWithInput';
export default HeaderWithInput;
