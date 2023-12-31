import EyeOpen from './EyeOpen';
import {render,screen} from '@testing-library/react';

describe('should the SVG icon EyeOpen', () =>{

    test('should render the SVG icon EyeOpen', () =>{
        render (<EyeOpen />)

        const eyeOpen = screen.getByTestId('eyeOpen-svg-test');
        expect(eyeOpen.getAttribute('data-testid')).toBe('eyeOpen-svg-test');
    });
});