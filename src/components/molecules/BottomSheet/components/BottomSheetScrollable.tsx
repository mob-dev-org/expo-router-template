import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { forwardRef } from 'react';
import { StyleSheet, View } from 'react-native';

import BottomSheet, { BottomSheetProps, BottomSheetRef } from '../index';
import Text from '@src/components/atoms/Text';

const BottomSheetScrollable = forwardRef<BottomSheetRef | undefined, BottomSheetProps>(
    (props, ref) => {
        return (
            <BottomSheet ref={ref} {...props}>
                <>
                    {props.header}
                    <BottomSheetScrollView>
                        {props.children || renderFakeContent()}
                    </BottomSheetScrollView>
                    {props.footer}
                </>
            </BottomSheet>
        );
    },
);
BottomSheetScrollable.displayName = 'BottomSheetScrollable';
export default BottomSheetScrollable;

const styles = StyleSheet.create({
    contentContainer: {
        height: 100,
        alignItems: 'center',
    },
});

const renderFakeContent = () => {
    return (
        <>
            <View style={styles.contentContainer}>
                <Text>Scrollable</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text>Scrollable</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text>Scrollable</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text>Scrollable</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text>Scrollable</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text>Scrollable</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text>Scrollable</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text>Scrollable</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text>Scrollable</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text>Scrollable</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text>Scrollable</Text>
            </View>
        </>
    );
};
