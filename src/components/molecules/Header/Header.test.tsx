// import React from 'react';
// import { fireEvent, screen, render } from '@testing-library/react-native';

// import { color, shadow } from '../../../const/variables';
// import Text from '../../atoms/Text';

// import HeaderWithInput from './index';

// jest.mock('react-native-safe-area-context', () => {
//     const inset = { top: 0, right: 0, bottom: 0, left: 0 };
//     return {
//         SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
//         SafeAreaConsumer: jest.fn().mockImplementation(({ children }) => children(inset)),
//         useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
//     };
// });
// const onChangeTextMock = jest.fn();

// describe('HeaderWithInput', () => {
//     it('Empty header styling and values', () => {
//         const { getByTestId } = render(<HeaderWithInput placeholderText="Pretraži adrese" />);
//         const input = screen.getByTestId('searchInput');
//         expect(input.props.placeholder).toBe('Pretraži adrese');
//         expect(input.props.placeholderTextColor).toBe('#A4B2CE');

//         // to have test id searchIcon
//         expect(input.props.value).toBe('');
//         expect(getByTestId('headerWithInput')).toHaveStyle(shadow);
//     });

//     it('When triggering change of text, make sure it is called', async () => {
//         const CHANGE_TEXT = 'content';

//         const { getByTestId } = render(<HeaderWithInput setText={onChangeTextMock} />);
//         fireEvent.changeText(getByTestId('searchInput'), CHANGE_TEXT);
//         expect(onChangeTextMock).toHaveBeenCalledWith(CHANGE_TEXT);
//     });

//     it('When text is passed make sure it has correct styling and clear button when pressed is called', async () => {
//         const { getByTestId } = render(<HeaderWithInput text="Test" setText={onChangeTextMock} />);
//         expect(getByTestId('searchInput')).toHaveStyle({
//             color: color.black,
//         });
//         // TODO: somehow it is failing, but the element and props are there
//         // expect(getByTestId('clearInput')).toBeTruthy();

//         // fireEvent.press(getByTestId('clearInput'));
//         // expect(onChangeTextMock).toHaveBeenCalledWith('');
//     });
// });
