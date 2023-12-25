import React from 'react';
import { render } from '@testing-library/react-native';
import Text from './index';

describe('Text', () => {
    it.todo('Create tests other than snapshot ones');

    it('No text', () => {
        const wrapper = render(<Text></Text>);
        expect(wrapper).toMatchSnapshot();
    });

    it('With text', () => {
        const wrapper = render(<Text>With text</Text>);
        expect(wrapper).toMatchSnapshot();
    });
    it('With text and size', () => {
        const wrapper = render(<Text size={10}>With text</Text>);
        expect(wrapper).toMatchSnapshot();
    });
    it('With text and weight bold', () => {
        const wrapper = render(<Text weight="bold">With text</Text>);
        expect(wrapper).toMatchSnapshot();
    });

    it('With text and centered text', () => {
        const wrapper = render(<Text center>With text</Text>);
        expect(wrapper).toMatchSnapshot();
    });

    it('With text and vertically centered text', () => {
        const wrapper = render(<Text centerVertical>With text</Text>);
        expect(wrapper).toMatchSnapshot();
    });

    it('With all of the properties passed', () => {
        const wrapper = render(
            <Text
                color={'red'}
                key={'key'}
                numberOfLines={1}
                size={10}
                style={{ color: 'green' }}
                weight={'bold'}
                center
                centerVertical>
                With text
            </Text>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
