import { BottomSheetView, useBottomSheetDynamicSnapPoints } from '@gorhom/bottom-sheet';
import React, { forwardRef, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import BottomSheet, { BottomSheetProps, BottomSheetRef } from '../index';
import Text from '@src/components/atoms/Text';

const BottomSheetDynamic = forwardRef<BottomSheetRef | undefined, BottomSheetProps>((props, ref) => {
    // -----------------------------------------------------------
    return (
        <BottomSheet
            // @ts-ignore
            enableDynamicSizing
            ref={ref}
            {...props}>
            <BottomSheetView>{props.children || renderFakeContent()}</BottomSheetView>
        </BottomSheet>
    );
});

BottomSheetDynamic.displayName = 'BottomSheetDynamic';
export default BottomSheetDynamic;

const styles = StyleSheet.create({
    contentContainer: {
        height: 300,
        alignItems: 'center',
    },
});

const renderFakeContent = () => {
    return (
        <View style={styles.contentContainer}>
            <Text style={{ textAlign: 'center' }}>
                Add some child components and this bottom sheet will adjust automatically to children height
            </Text>
        </View>
    );
};
