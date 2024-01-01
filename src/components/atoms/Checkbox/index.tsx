import { FunctionComponent } from 'react';
import { View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export type CheckboxProps = {
    checked?: boolean;
    style?: ViewStyle;
};

const Checkbox: FunctionComponent<CheckboxProps> = (props) => {
    const { checked, style } = props;
    const { container } = styles;

    return (
        <View testID="Checkbox" style={[container, checked && styles.checked, style]}>
            {checked && <Ionicons name="ios-checkmark-sharp" size={18} />}
        </View>
    );
};

export default Checkbox;
