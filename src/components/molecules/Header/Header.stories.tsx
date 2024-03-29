import Text from '@src/components/atoms/Text';
import Divider from '@src/components/atoms/Divider';

import Header from './index';

export default {
    title: 'Header',
    component: Header,
};

export const Headers = () => {
    return (
        <>
            <Divider style={{ marginVertical: 16 }} />
            {/* SINCE THERE IS HEADER SHOW IN SCREEN, SAFE AREA INSET RETURNS 0 FOR TOP */}
            <Header
                shadow
                menu
                title="Menu"
                leftItem={<Text>Left</Text>}
                rightItem={<Text>Right</Text>}
            />
            <Divider style={{ marginVertical: 16 }} />

            {/* SINCE THERE IS HEADER SHOW IN SCREEN, SAFE AREA INSET RETURNS 0 FOR TOP */}
            <Header
                shadow
                back
                title="Back"
                leftItem={<Text>Left</Text>}
                rightItem={<Text>Right</Text>}
            />
            <Divider style={{ marginVertical: 16 }} />
            {/* SINCE THERE IS HEADER SHOW IN SCREEN, SAFE AREA INSET RETURNS 0 FOR TOP */}
            <Header title="No Shadow" leftItem={<Text>Left</Text>} rightItem={<Text>Right</Text>} />
            <Divider height={0} style={{ marginVertical: 16 }} />
            {/* SINCE THERE IS HEADER SHOW IN SCREEN, SAFE AREA INSET RETURNS 0 FOR TOP */}
            <Header menu title="Aaaa" />
        </>
    );
};

Headers.args = {};
