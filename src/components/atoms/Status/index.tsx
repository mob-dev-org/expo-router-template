import React, { FunctionComponent } from 'react';
import { View, ViewStyle } from 'react-native';

import Text from '../Text';

import styles from './styles';

export type StatusProps = {
    status?: boolean;
    style?: ViewStyle;
};

const Status: FunctionComponent<StatusProps> = (props) => {
    const { status, style } = props;
    const { container, statusOff, statusOn } = styles;
    const text = status ? 'Uključen' : 'Isključen';
    const bgColor = status ? statusOn : statusOff;
    const textColor = status ? 'green' : 'red';

    return (
        <View testID="status" style={[container, style, bgColor]}>
            <Text size={12} weight="bold" uppercase center color={textColor}>
                {text}
            </Text>
        </View>
    );
};

export default Status;
