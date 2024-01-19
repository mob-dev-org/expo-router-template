import { Stack } from 'expo-router';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLanguage } from '@src/languages/languagesStore';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

const RouterTabs = () => {
    const client = new QueryClient();
    // Initialize language, because persistStore is does not return it in time to set stored language
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage(language);
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PaperProvider>
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
            </PaperProvider>
        </GestureHandlerRootView>
    );
};

export default RouterTabs;
