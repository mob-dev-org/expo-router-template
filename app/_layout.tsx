import { Stack } from 'expo-router';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLanguage } from '@src/languages/languagesStore';

const RouterTabs = () => {
    const client = new QueryClient();
    // Initialize language, because persistStore is does not return it in time to set stored language
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage(language);
    }, []);

    return (
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
    );
};

export default RouterTabs;
