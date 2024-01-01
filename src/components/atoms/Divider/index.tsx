import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';

// Props
export type DividerProps = {
    backgroundColor?: string;
    height?: number;
    style?: ViewStyle;
};

const Divider: FC<DividerProps> = ({ backgroundColor = '#ccc', style, height = 1 }) => (
    <View
        style={[
            {
                height,
                width: '100%',
                backgroundColor,
            },
            style,
        ]}
    />
);

export default Divider;
