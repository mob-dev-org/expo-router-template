import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { View, ViewStyle } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

// import { color } from '../../../const/variables';

export type ToggleProps = {
    isOn?: boolean;
    onPress?: (isOn: boolean) => void;
    style?: ViewStyle;
    disabled?: boolean;
};

export type ToggleRef = {
    isToggled: boolean;
};

const Toggle = forwardRef<ToggleRef | undefined, ToggleProps>((props, ref) => {
    const { isOn, style, onPress } = props;
    const [isToggled, setIsToggled] = React.useState(!!isOn);

    useEffect(() => {
        if (isOn !== undefined && isOn !== isToggled) setIsToggled(!!isOn);
    }, [isOn]);

    useImperativeHandle(ref, () => ({ isToggled }), [isToggled]);

    return (
        <View style={style}>
            <ToggleSwitch
                disabled={props.disabled}
                isOn={isToggled}
                // onColor={color.newGreen}
                // offColor={color.newRed}
                onToggle={(isOn) => {
                    if (onPress) onPress(!!isOn);
                    setIsToggled(!!isOn);
                }}
            />
        </View>
    );
});

Toggle.displayName = 'Toggle';

export default Toggle;
