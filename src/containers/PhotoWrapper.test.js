import React from 'react'
import PhotoWrapper from './PhotoWrapper'
import { shallow } from 'enzyme'

describe('Photo component', () => {
    it('state should start with 0', () => {
        const wrapper = shallow(<PhotoWrapper/>);
        const reRenderState = wrapper.state().reRenderChild;
        expect(reRenderState).toEqual(0);
    });
});

