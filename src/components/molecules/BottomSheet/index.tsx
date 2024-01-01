import {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetHandle,
    BottomSheetModal,
    BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { ColorValue, Keyboard, Platform } from 'react-native';
import { BackHandler } from 'react-native';
import colors from '@src/constants/colors';

import styles from './styles';

const CustomBackdrop = (props: BottomSheetBackdropProps) => {
    return <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} opacity={0.3} />;
};

export type BottomSheetProps = {
    children?: React.ReactElement;
    header?: React.ReactElement;
    footer?: React.ReactElement;
    snapPoints?: Array<string | number>;
    backgroundColor?: ColorValue;
    disableBackdrop?: boolean;
    disableHandle?: boolean;
} & { onClose?: () => void };

export type BottomSheetRef = {
    closeModal: () => void;
    showModal: () => void;
    dismissModal: () => void;
};

type AdditionalProps = {
    onClose?: () => void;
    backgroundColor?: ColorValue;
    disableBackdrop?: boolean;
    disableHandle?: boolean;
};

const BottomSheet = forwardRef<
    BottomSheetRef | undefined,
    (BottomSheetProps | BottomSheetModalProps) & AdditionalProps
>((props, ref) => {
    const [isOpened, setIsOpened] = React.useState(false);
    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    useImperativeHandle(ref, () => ({
        closeModal,
        showModal,
        dismissModal,
    }));

    // -----------------------------------------------------------
    // variables
    const snapPoints = useMemo(() => ['60%'], []);

    // callbacks
    const showModal = useCallback(() => {
        bottomSheetModalRef.current?.present();
        setIsOpened(true);
    }, []);

    const closeModal = useCallback(() => {
        bottomSheetModalRef.current?.close();
        setIsOpened(false);
    }, []);

    const dismissModal = useCallback(() => {
        bottomSheetModalRef.current?.dismiss();
        setIsOpened(false);
    }, []);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (isOpened) {
                closeModal();
                return true;
            }
            return false;
        });

        return () => {
            backHandler.remove();
        };
    }, [isOpened]);

    // -----------------------------------------------------------
    const [keyboardBottomInset, setKeyboardBottomInset] = React.useState(0);

    useEffect(() => {
        // BUG FIXED BOTTOMSHEET FOR ABSOLUTE VIEW WHEN KEYBOARD SHOW
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardBottomInset(0.1);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardBottomInset(0);
        });

        // CLEAR FUNCTION COMPONENT UNMOUNT
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <BottomSheetModal
            {...(Platform.OS === 'android'
                ? {
                      keyboardBehavior: 'extend',
                      keyboardBlurBehavior: 'restore',
                      bottomInset: keyboardBottomInset,
                  }
                : {})}
            enablePanDownToClose
            enableDismissOnClose
            onDismiss={props.onClose}
            snapPoints={snapPoints}
            backdropComponent={props.disableBackdrop ? null : CustomBackdrop}
            onChange={(index) => {
                if (index === -1) props.onClose && props.onClose();
            }}
            backgroundStyle={{
                backgroundColor: props?.backgroundColor ?? colors.lightBlue,
            }}
            style={styles.bottomSheet}
            {...props}
            handleComponent={props?.disableHandle ? null : BottomSheetHandle}
            ref={bottomSheetModalRef}>
            {props.children}
        </BottomSheetModal>
    );
});
BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
