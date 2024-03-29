import { Stack } from 'expo-router';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLanguage } from '@src/languages/languagesStore';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RouterTabs = () => {
    const client = new QueryClient();
    // Initialize language, because persistStore is does not return it in time to set stored language
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage(language);
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <QueryClientProvider client={client}>
                <BottomSheetModalProvider>
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
                </BottomSheetModalProvider>
            </QueryClientProvider>
        </GestureHandlerRootView>
    );
};

export default RouterTabs;
