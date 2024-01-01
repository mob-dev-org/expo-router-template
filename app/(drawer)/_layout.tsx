import '@src/styles';
import { Drawer } from 'expo-router/drawer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLanguage } from '@src/languages/languagesStore';

const RootLayout = () => {
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage(language);
    }, []);

    const client = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5, // 5 minutes
            },
            mutations: {
                onError: (error) => {
                    if ('message' in error) {
                        console.error(error.message);
                    }
                },
            },
        },
    });

    return (
        <QueryClientProvider client={client}>
            <Drawer
            // drawerContent={(props) => {
            //     return (
            //         <DrawerContentScrollView {...props}>
            //             <DrawerItem label="Website" onPress={() => Linking.openURL('https://www.expo.dev/')} />
            //             <Link href={ROUTES.LOGIN} onPress={() => props.navigation.closeDrawer()}>
            //                 Login
            //             </Link>
            //             <Link href={ROUTES.HOME} onPress={() => props.navigation.closeDrawer()}>
            //                 Home
            //             </Link>
            //             <Link
            //                 href={{
            //                     pathname: ROUTES.DETAILS,
            //                     params: { user: 'evanbacon' },
            //                 }}
            //                 onPress={() => props.navigation.closeDrawer()}>
            //                 Details
            //             </Link>
            //             <Link href={ROUTES.COUNTER} onPress={() => props.navigation.closeDrawer()}>
            //                 Counter
            //             </Link>
            //         </DrawerContentScrollView>
            //     );
            // }}

            // screenOptions={{
            //     title: drawerTitle,
            // }}
            />
        </QueryClientProvider>
    );
};

export default RootLayout;
