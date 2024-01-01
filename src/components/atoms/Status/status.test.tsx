// import { render } from '@testing-library/react-native';

// import { color } from '../../../const/variables';

// import Status from './index';

// describe('Status', () => {
//     it('When passing status true it should contain text Uključen and color #49C97D', () => {
//         const { getByText } = render(<Status status />);
//         expect(getByText('Uključen')).toBeTruthy();
//         expect(getByText('Uključen')).toHaveStyle({ color: '#49C97D' });
//     });

//     it('When nothing is passed it should contain text Isključen and color #F74848', () => {
//         const { getByText } = render(<Status />);
//         expect(getByText('Isključen')).toBeTruthy();
//         expect(getByText('Isključen')).toHaveStyle({ color: color.newRed });
//     });

//     it(' When passing a style it should contain it', () => {
//         const { getByTestId } = render(<Status style={{ marginTop: 16 }} />);
//         expect(getByTestId('status')).toHaveStyle({ marginTop: 16 });
//     });
// });
