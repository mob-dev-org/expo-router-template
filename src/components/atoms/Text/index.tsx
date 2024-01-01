import React, { FunctionComponent } from 'react';
import { Text as RNText, TextStyle } from 'react-native';

// import { themeColor as themeColors } from '../../../const/variables';
// import { GarbageType } from '../../../api/zgApi.schemas';

import styles from './styles';

export type TextColors =
    | 'black'
    | 'white'
    | 'blueGray'
    | 'gray'
    | 'gray2'
    | 'lightGray'
    | 'green'
    | 'red'
    | 'blue'
    | 'lightBlue'
    | 'lightGrayWithOpacity';

export type TextSize = 8 | 11 | 12 | 13 | 14 | 16 | 18 | 20 | 24 | 32;

export type TextProps = {
    size?: TextSize;
    color?: TextColors;
    customColor?: string;
    // TODO: add more weights with numbers in name
    weight?: 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';
    uppercase?: boolean;
    // themeColor?: GarbageType;
    center?: boolean;
    lineHeight?: number;
    letterSpacing?: number;
    numberOfLines?: number;
    style?: TextStyle;
    disableFontScaling?: boolean;
    children: React.ReactNode;
};

const Text: FunctionComponent<TextProps> = ({
    children,
    color = 'black',
    customColor,
    size = 16,
    weight = 'regular',
    uppercase,
    // themeColor,
    center,
    lineHeight,
    numberOfLines,
    style,
    letterSpacing,
    disableFontScaling,
}) => {
    return (
        <RNText
            numberOfLines={numberOfLines}
            style={[
                {
                    ...style,
                    fontSize: size,
                    textAlignVertical: 'center',
                    includeFontPadding: false,
                },
                styles[weight],
                styles[color],
                !!customColor && { color: customColor },
                // themeColor && { color: themeColors[themeColor] },
                uppercase && styles.uppercase,
                center && { textAlign: 'center' },
                !!lineHeight && { lineHeight },
                !!letterSpacing && { letterSpacing },
            ]}
            allowFontScaling={!disableFontScaling}>
            {children}
        </RNText>
    );
};

export default Text;
