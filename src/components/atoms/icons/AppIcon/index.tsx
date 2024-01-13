import React, { FC } from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
// ------------------ Simple Icons ------------------
import Back from '@src/assets/icons/app_icons/back.svg';
import Bell from '@src/assets/icons/app_icons/bell.svg';
import BellOff from '@src/assets/icons/app_icons/bell-off.svg';
import Barcode from '@src/assets/icons/app_icons/barcode.svg';
import Calendar from '@src/assets/icons/app_icons/calendar.svg';
import Check from '@src/assets/icons/app_icons/check.svg';
import Close from '@src/assets/icons/app_icons/close.svg';
import CloseCircle from '@src/assets/icons/app_icons/close-circle.svg';
import Edit from '@src/assets/icons/app_icons/edit.svg';
import X from '@src/assets/icons/app_icons/x.svg';
// ------------------ Chevron icons ------------------
import ChevronDown from '@src/assets/icons/chevron_icon/chevron-down.svg';
import ChevronUp from '@src/assets/icons/chevron_icon/chevron-up.svg';

// ------------------ Icons ------------------
export type AppIconNames =
    | 'back'
    | 'bell'
    | 'bell-off'
    | 'calendar'
    | 'check'
    | 'close'
    | 'close-circle'
    | 'edit'
    | 'x'
    | 'chevron-down'
    | 'chevron-up'
    | 'barcode';

const components: { [key in AppIconNames]: React.FC<SvgProps> } = {
    back: Back,
    bell: Bell,
    'bell-off': BellOff,
    calendar: Calendar,
    check: Check,
    close: Close,
    'close-circle': CloseCircle,
    edit: Edit,
    x: X,
    'chevron-down': ChevronDown,
    'chevron-up': ChevronUp,
    barcode: Barcode,
};

export type AppIconProps = {
    name: AppIconNames;
    size?: number;
    color?: ColorValue;
    style?: ViewStyle;
};

const AppIcon: FC<AppIconProps> = ({ name, size, ...props }) => {
    const IconFactory = components[name] || components['x'];
    return <IconFactory testID={`${name}Icon`} width={size} height={size} {...props} />;
};

AppIcon.defaultProps = {
    size: 24,
    color: 'black',
};

export default AppIcon;
