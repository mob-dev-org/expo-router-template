import { Drawer } from 'expo-router/drawer';

const RootLayout = () => {
    return (
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
        />
    );
};

export default RootLayout;
