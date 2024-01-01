import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Button from './index';
import {color} from '../../../const/variables';

describe('Toggle', () => {
  // Label
  it('When label is passed render text, without icon', () => {
    const {getByTestId} = render(<Button label="test" testID="button" />);
    expect(getByTestId('button')).toHaveTextContent('test');
  });

  // Icon
  it('When icon name is passed render icon', () => {
    const {getByTestId} = render(
      <Button label="test" testID="button" icon="bell" />,
    );
    expect(getByTestId('bell')).toBeTruthy();
  });

  // Style
  it('When style is passed render it', () => {
    const {getByTestId} = render(
      <Button label="test" testID="button" style={{margin: 16}} />,
    );
    expect(getByTestId('button')).toHaveStyle({margin: 16});
  });

  // No custom colors
  it('When passing color do not have it in style', () => {
    const {getByTestId} = render(
      <Button
        label="test"
        testID="button"
        style={{
          backgroundColor: color.newRed,
        }}
      />,
    );
    expect(getByTestId('button')).not.toHaveStyle({
      backgroundColor: color.newRed,
    });
  });

  // Border
  it('When border prop is true, have border style', () => {
    const {getByTestId} = render(
      <Button label="test" testID="button" border />,
    );
    expect(getByTestId('button')).toHaveStyle({
      borderColor: color.blue,
      borderWidth: 1,
    });
  });

  // Border: false
  it('When border prop is false,do not have border style', () => {
    const {getByTestId} = render(<Button label="test" testID="button" />);

    expect(getByTestId('button')).not.toHaveStyle({
      borderColor: color.blue,
      borderWidth: 1,
    });
  });

  // Disabled
  it('When disable prop is true, contain disabled styling and colors, make sure onPress is not called', () => {
    const onPress = jest.fn();
    const {getByTestId, getByText} = render(
      <Button label="test" testID="button" disabled onPress={onPress} />,
    );
    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: '#A4B2CE33',
      borderColor: '#A4B2CE',
    });

    expect(getByText('test')).toHaveStyle({
      color: '#A4B2CE',
    });

    fireEvent.press(getByTestId('button'));
    expect(onPress).not.toHaveBeenCalled();
  });

  // Uppercase
  it('When uppercase prop is true, label should be all uppercase ', () => {
    const {getByText} = render(
      <Button label="test" testID="button" uppercase />,
    );
    expect(getByText('test')).toHaveStyle({
      textTransform: 'uppercase',
    });
  });

  // Size large
  it('When size prop is "large", button should match large styling from figma ', () => {
    const {getByTestId} = render(
      <Button label="test" testID="button" size="large" />,
    );
    expect(getByTestId('button')).toHaveStyle({
      padding: 16,
      paddingHorizontal: 24,
    });
  });

  // Size small
  it('When size prop is "small", button should match small styling from figma ', () => {
    const {getByTestId, getByText} = render(
      <Button label="test" testID="button" size="small" />,
    );

    expect(getByTestId('button')).toHaveStyle({
      padding: 8,
    });

    expect(getByText('test')).toHaveStyle({
      fontSize: 12,
    });
  });

  // onPress
  it('When passing onPress function make sure it is called ', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <Button label="test" testID="button" onPress={onPress} />,
    );

    fireEvent.press(getByTestId('button'));
    expect(onPress).toHaveBeenCalled();
  });
});
