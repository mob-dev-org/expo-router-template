import { FC } from 'react';
import { ActivityIndicator, TouchableOpacity, ViewStyle } from 'react-native';

// import { color } from '../../../const/variables';
// import AppIcon, { AppIconNames } from '../icons/AppIcon';
import Text, { TextColors } from '../Text';

import styles from './styles';

export type ButtonProps = {
    label: string;
    onPress?: () => void;
    style?: ViewStyle;
    testID?: string;
    // icon?: AppIconNames;
    border?: boolean;
    disabled?: boolean;
    mainColor?: TextColors;
    contentWidth?: boolean;
    reverse?: boolean;
    contentToTheSide?: boolean;
    uppercase?: boolean;
    size?: 'small' | 'large';
    noBackground?: boolean;
    fullColor?: boolean;
    loading?: boolean;
};

const Button: FC<ButtonProps> = ({
    onPress,
    style,
    // icon,
    border,
    disabled,
    contentWidth,
    reverse,
    contentToTheSide,
    size = 'large',
    uppercase,
    noBackground = false,
    mainColor = 'blue',
    fullColor,
    loading,
    ...props
}) => {
    const iconContainer = reverse ? styles[`iconRight${size}`] : styles[`iconLeft${size}`];

    const buttonStyle = [
        style,
        styles.button,
        styles[size],
        border && styles.border,
        contentWidth && styles.contentWidth,
        contentToTheSide && styles.contentToTheSide,
        reverse && styles.reverse,
        noBackground && styles.noBackground,
        // mainColor && { borderColor: color[mainColor] },
        fullColor && styles.fullColor,
        disabled && styles.disabled,
    ];

    return (
        <TouchableOpacity
            {...props}
            onPress={disabled ? () => null : onPress}
            activeOpacity={disabled ? 1 : 0.5}
            style={buttonStyle}>
            {loading && (
                <ActivityIndicator
                    size="small"
                    style={{ marginRight: 16 }}
                    color={disabled ? 'blueGray' : fullColor ? 'white' : mainColor}
                />
            )}
            {/* {icon && (
                <View testID={icon} style={iconContainer}>
                    <AppIcon
                        name={icon}
                        color={disabled ? color.blueGray : color[mainColor]}
                        size={size === 'small' ? 16 : 24}
                    />
                </View>
            )} */}
            <Text
                size={size === 'small' ? 12 : 16}
                uppercase={uppercase}
                weight="medium"
                color={disabled ? 'blueGray' : fullColor ? 'white' : mainColor}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
