import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../redux/store';
import UserTable from '../components/pages/users.js';
import { BrowserRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

/*
 *  Test UserTable component, in which we test the following,
 *  - Table elements, including number of rows/columns and its contents
 */

// Test data
const rows = [
  { index: 1, name: 'user1', email: 'user1@email.com', mobile: '0123456789' },
  { index: 2, name: 'user2', email: 'user2@email.com', mobile: '0123456798' },
  { index: 3, name: 'user3', email: 'user3@email.com', mobile: '0123459876' }
];

const columns = [
  { id: 'index', label: 'Id' },
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Mobile' }
];

let editSpy, component;
beforeEach(() => {
  component = mount(
    <Provider store={store}>
      <Router>
        <UserTable rows={rows} columns={columns} />
      </Router>
    </Provider>
  );
});

describe('Testing UserTable component', () => {
  //Testing table
  it('component renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('Component should contain Table', () => {
    expect(component.find('table').value).toEqual = 1;
  });

  it('should contain three table columns', () => {
    const tags = component.find('th');
    expect(tags.value).toEqual = 3;
  });

  //Testing table column
  it('should contain three table rows', () => {
    const tags = component.find('td');
    expect(tags.value).toEqual = 3;
  });
});
