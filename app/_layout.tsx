import { Stack } from 'expo-router';

const RouterTabs = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="[...unmatched]"
                options={{
                    headerShown: true,
                }}
            />
        </Stack>
    );
};

export default RouterTabs;
