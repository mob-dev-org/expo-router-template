import React, { FC, memo } from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
// ------------------ Recycle types - images ------------------
import ChevronDown from 'assets/icons/chevron_button/chevron-down.svg';
import ChevronUp from 'assets/icons/chevron_button/chevron-up.svg';
import ChevronLeft from 'assets/icons/chevron_button/chevron-left.svg';
import ChevronRight from 'assets/icons/chevron_button/chevron-right.svg';
// ------------------ Icons ------------------

type ChevronButtonNames = 'chevron-down' | 'chevron-up' | 'chevron-left' | 'chevron-right';

const components: { [key in ChevronButtonNames]: React.FC<SvgProps> } = {
    'chevron-down': ChevronDown,
    'chevron-up': ChevronUp,
    'chevron-left': ChevronLeft,
    'chevron-right': ChevronRight,
};

export type ChevronButtonImageProps = {
    name: ChevronButtonNames;
    size?: number;
    color?: ColorValue;
    style?: ViewStyle;
};

const ChevronButtonImage: FC<ChevronButtonImageProps> = ({ name, size, ...props }) => {
    const IconFactory = components[name];
    return <IconFactory width={size} height={size} {...props} />;
};

ChevronButtonImage.defaultProps = {
    size: 24,
    color: 'black',
};

export default memo(ChevronButtonImage);
