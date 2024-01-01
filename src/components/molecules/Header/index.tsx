import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { hitSlop, shadow as shadowStyle } from '@src/styles/helpers';
import { DrawerActions } from '@react-navigation/native';
import Text from '@src/components/atoms/Text';

import styles from './styles';

export type HeaderProps = {
    back?: boolean;
    menu?: boolean;
    shadow?: boolean;
    title?: string;
    leftItem?: React.ReactNode;
    rightItem?: React.ReactNode;
};

const BackButton = () => {
    const { goBack } = useNavigation();

    return (
        <TouchableOpacity testID="backBtn" onPress={goBack} hitSlop={hitSlop()}>
            <Ionicons name="chevron-back" />
        </TouchableOpacity>
    );
};

const MenuButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            hitSlop={hitSlop()}>
            <Ionicons name="menu" />
        </TouchableOpacity>
    );
};

const Header: FC<HeaderProps> = ({
    back = false,
    menu = false,
    shadow = false,
    title = '',
    leftItem,
    rightItem,
}) => {
    const { top, bottom } = useSafeAreaInsets();

    return (
        <View testID="Header" style={[shadow && shadowStyle, { paddingTop: top }]}>
            <View style={styles.container}>
                <View style={styles.left}>
                    {menu && <MenuButton />}
                    {back && <BackButton />}
                    {leftItem}
                </View>
                <View style={styles.center}>
                    <Text>{title}</Text>
                </View>
                <View style={styles.right}>{rightItem}</View>
            </View>
        </View>
    );
};

Header.displayName = 'Header';
export default Header;
