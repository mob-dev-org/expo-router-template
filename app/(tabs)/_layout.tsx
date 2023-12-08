// app/(tabs)/_layout.tsx

import { Text, View } from 'react-native';
import { TopTabs } from '@bacons/expo-router-top-tabs';

export default function CustomLayout() {
    return (
        <TopTabs screenOptions={{}}>
            <TopTabs.Header>
                <View pointerEvents="none" style={{}}>
                    <Text>Header</Text>
                </View>
            </TopTabs.Header>

            <TopTabs.Screen name="index" />
            <TopTabs.Screen name="index2" />
        </TopTabs>
    );
}
