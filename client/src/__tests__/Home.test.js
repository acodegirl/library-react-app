import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../components/pages/home';

Enzyme.configure({ adapter: new Adapter() });

/*
 *  Test Home component, in which we test the following,
 *  - component & its elements rendering
 */
describe('Testing Home component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('Component renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
