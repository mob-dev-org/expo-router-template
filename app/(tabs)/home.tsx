import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRef } from 'react';
import React from 'react';
import { BottomSheetRef } from '@src/BottomSheet';
import BottomSheetExample from '@src/BottomSheet/screen/BottomSheetExample';

const Home = () => {
    const combinedRefDynamic = useRef<BottomSheetRef>();

    // Function to show the modal
    const showModal = () => {
        combinedRefDynamic.current?.showModal();
    };
    const [selected, setSelected] = React.useState(false);

    return (
        <>
            <View style={[styles.container, selected && styles.selected]}>
                <TouchableOpacity
                    onPress={() => {
                        console.log('onPress', combinedRefDynamic);
                        setSelected(!selected);
                        showModal();
                    }}>
                    <View style={[styles.imeContainer]}>
                        <Text
                            style={{
                                fontSize: 20,
                            }}>
                            Open modal
                        </Text>
                    </View>
                </TouchableOpacity>

                <BottomSheetExample />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
    },

    title: {
        fontSize: 64,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 36,
        color: '#38434D',
    },
    linkButton: {
        fontSize: 24,
        color: '#1B95E0',
        marginTop: 16,
    },
    selected: {
        backgroundColor: '#EDEDED',
    },
    imeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
        overflow: 'visible',
    },
});

export default Home;
