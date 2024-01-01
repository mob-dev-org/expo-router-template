import Status, { StatusProps } from './index';

export default {
    title: 'Status',
    component: Status,
    argTypes: {
        status: {
            control: { type: 'boolean' },
        },
    },
};

export const Statuses = (args: StatusProps) => {
    return <Status {...args} style={{ margin: 16, alignSelf: 'center' }} />;
};

Statuses.args = {};
