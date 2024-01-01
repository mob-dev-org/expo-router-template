import React, { forwardRef } from 'react';
import { LayoutChangeEvent, StyleSheet, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from '@src/components/atoms/Text';

import { BottomSheetProps, BottomSheetRef } from '..';

import BottomSheetDynamic from './BottomSheetDynamic';
import BottomSheetScrollable from './BottomSheetScrollable';

const BottomSheetCombined = forwardRef<BottomSheetRef | undefined, BottomSheetProps>(
    (props, ref) => {
        const propsForDynamicSheet = { ...props };
        // deleting it because it will beat the purpose of dynamic sheet in this component
        delete propsForDynamicSheet.snapPoints;

        const { top } = useSafeAreaInsets();
        const { height: windowHeight, width } = useWindowDimensions();

        const [useScrollView, setUseScrollView] = React.useState<boolean | null>(null);

        const customContentLayout = (event: LayoutChangeEvent) => {
            const { height } = event.nativeEvent.layout;

            // 40 is approximate value chosen,
            // idea is to calculate it as height of native iOS modal
            setUseScrollView(height > windowHeight - top - 40);
        };

        if (useScrollView === null)
            return (
                <View
                    style={{ position: 'absolute', opacity: 0, width }}
                    onLayout={customContentLayout}>
                    {props.header}
                    {props.children || renderFakeContent()}
                    {props.footer}
                </View>
            );

        return useScrollView ? (
            <BottomSheetScrollable ref={ref} snapPoints={['90%']} {...props}>
                {props.children || renderFakeContent()}
            </BottomSheetScrollable>
        ) : (
            <BottomSheetDynamic ref={ref} {...propsForDynamicSheet}>
                <>
                    {props.header}
                    {props.children || renderFakeContent()}
                    {props.footer}
                </>
            </BottomSheetDynamic>
        );
    },
);

BottomSheetCombined.displayName = 'BottomSheetCombined';
export default BottomSheetCombined;

const styles = StyleSheet.create({
    contentContainer: {
        height: 100,
        alignItems: 'center',
    },
});

const renderFakeContent = () => {
    return (
        <>
            {Array(10)
                .fill(0)
                .map((_, index) => (
                    <View key={index} style={styles.contentContainer}>
                        <Text>Scrollable</Text>
                    </View>
                ))}
        </>
    );
};
