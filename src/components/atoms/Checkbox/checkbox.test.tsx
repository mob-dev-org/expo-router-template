import React from 'react';
import { render } from '@testing-library/react-native';
import Checkbox from './index';
import { color } from '../../../const/variables';

describe('Checkbox', () => {
    it('When checked is true render white background and check icon', async () => {
        const { getByTestId } = render(<Checkbox checked />);
        const checkbox = getByTestId('Checkbox');
        expect(checkbox).toHaveStyle({
            borderColor: '#fff',
            borderWidth: 1.5,
            borderRadius: 3,
            height: 22,
            width: 22,
        });
    });

    it('When checked is false render blue background and no check icon', async () => {
        const { getByTestId } = render(<Checkbox />);
        const checkbox = getByTestId('Checkbox');
        expect(checkbox).toHaveStyle({
            borderColor: color.blue,
            borderWidth: 1.5,
            borderRadius: 3,
            height: 22,
            width: 22,
        });
    });
});
