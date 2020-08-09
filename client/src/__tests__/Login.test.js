import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Login from '../components/pages/login';

Enzyme.configure({ adapter: new Adapter() });

/*
 *  Test Login component, in which we test the following,
 *  - component & its elements rendering
 *  - button click event
 */
describe('Testing Login component', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  it('Component renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('Testing component elements', () => {
    expect(component.find('form').value).toEqual = 1;
    expect(component.find('input').value).toEqual = 2;
    expect(component.find('button').value).toEqual = 1;
  });

  it('Testing Back button', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<button onClick={mockCallBack}>Ok!</button>);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
