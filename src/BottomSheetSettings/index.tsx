import colors from '@src/constants/colors';
import React from 'react';
import { View, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Text from '@src/components/atoms/Text';
import { Ionicons } from '@expo/vector-icons';

const NotificationBottomSheet = ({
    times,
    selectedTimes,
    toggleSelectedTime,
    switchActivated,
    offsetMinutes,
    onMinusPress,
    onPlusPress,
    onToggleSwitch,
    namazi,
}) => (
    <>
        {times.map((time, index) => (
            <TouchableOpacity
                key={time}
                onPress={() => {
                    toggleSelectedTime(index);
                }}
                activeOpacity={0.8}
                style={!switchActivated && { opacity: 0.8 }}>
                <View key={time} style={styles.bottomSheetTimes}>
                    <View style={styles.bottomSheetCheckBox}>
                        <CheckBox
                            checked={selectedTimes.includes(index)}
                            onPress={() => toggleSelectedTime(index)}
                            // disabled={selectedTimes.includes(index) && switchActivated}
                        />
                        <Text size={16} style={{ flex: 4 }}>
                            {namazi[index]}{' '}
                        </Text>
                        {/* <Text
              size={16}
              style={
                !!offsetMinutes ? { flex: 1 } : { marginRight: 18 }
              }>
              {moment(time, "HH:mm").format("HH:mm")}
            </Text> */}

                        {
                            <View style={{ marginRight: 18 }}>
                                <Text size={16}>vhvihvhiv</Text>
                            </View>
                        }
                    </View>
                </View>
            </TouchableOpacity>
        ))}

        <View
            style={[
                styles.bottomSheetToggle,
                { marginBottom: 8, marginTop: 24 },
                // !switchActivated && { opacity: 0.8 },
            ]}>
            <Text size={16} style={{ marginRight: 24 }}>
                Odgodi notifikaciju za:
            </Text>
            <TouchableOpacity
                // disabled={!switchActivated}
                style={styles.addRemove}
                onPress={onMinusPress}>
                <Ionicons name="remove-circle" color={colors.blue} size={32} />
            </TouchableOpacity>
            <Text size={16} weight="700">
                {offsetMinutes}
            </Text>
            <TouchableOpacity
                // disabled={!switchActivated}
                style={styles.addRemove}
                onPress={onPlusPress}>
                <Ionicons name="add-circle" color={colors.blue} size={32} />
            </TouchableOpacity>
        </View>

        <View style={styles.bottomSheetToggle}>
            <Text size={16}>Uključi notifikaciju</Text>
            <Switch onValueChange={onToggleSwitch} value={switchActivated} />
        </View>
    </>
);

export default NotificationBottomSheet;

const styles = StyleSheet.create({
    bottomSheetMessage: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 8,
    },
    time: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    checkBox: {
        // justifyContent: "flex-start",
        // flexDirection: "row",
        // alignItems: "center",
    },
    bottomSheetToggle: {
        gap: 8,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 16,
        padding: 16,
        marginBottom: 32,
        marginHorizontal: 24,
    },
    bottomSheetCheckBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 16,
        // justifyContent: "space-between",
    },
    bottomSheetInput: {
        borderWidth: 2,
        padding: 8,
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffa',
    },
    bottomSheetTimes: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 24,
        // marginVertical: 8,
        marginTop: 8,
    },

    container: {
        flex: 1,
    },
    topSwitchContainer: {
        alignItems: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    jutarnjiVecernjiContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    tabsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 24,
        marginVertical: 8,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    addRemove: {
        // marginHorizontal: 8,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },

    toggleContainer: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        borderColor: colors.lightBlue,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },
});
