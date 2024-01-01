import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import notifee from '@notifee/react-native';
export const handleNotificationSettings = async () => {
    const checksCompleted = await AsyncStorage.getItem('checksCompleted');

    const batteryOptimizationEnabled = await notifee.isBatteryOptimizationEnabled();
    const powerManagerInfo = await notifee.getPowerManagerInfo();

    if (!checksCompleted) {
        if (batteryOptimizationEnabled || powerManagerInfo.activity) {
            // Alert.alert(
            //   "Restrictions Detected",
            //   "To ensure notifications are delivered, please complete the necessary checks",
            //   [
            //     {
            //       text: "OK, open settings",
            //       onPress: async () => {
            //         if (batteryOptimizationEnabled) {
            //           await notifee.openBatteryOptimizationSettings();
            //         }
            //         if (powerManagerInfo.activity) {
            //           await notifee.openPowerManagerSettings();
            //         }
            //         await AsyncStorage.setItem("checksCompleted", "true");
            //       },
            //     },
            //     {
            //       text: "Cancel",
            //       onPress: () => console.log("Cancel Pressed"),
            //       style: "cancel",
            //     },
            //   ],
            //   { cancelable: false },
            // );
        }
    }
};
