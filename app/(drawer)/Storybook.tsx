import Storybook from '../../.storybook';

export default process.env.EXPO_PUBLIC_STORYBOOK_ENABLED == 'true' ? null : Storybook;
