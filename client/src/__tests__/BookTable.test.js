import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../redux/store';
import BookTable from '../components/pages/books';
import { BrowserRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

/*
 *  Test BookTable component, in which we test the following,
 *  - Table elements, including number of rows/columns and its contents
 */

// Test data
const rows = [
  { index: 1, name: 'Little Women', author: 'Louisa', genre: 'Classic' },
  { index: 2, name: 'Life of Pi', author: 'Yann Martel', genre: 'Adventure' },
  {
    index: 3,
    name: '4.50 from Paddington',
    author: 'Agatha Christie',
    genre: 'Mystery'
  }
];

const columns = [
  { id: 'index', label: 'Id' },
  { id: 'name', label: 'Name' },
  { id: 'author', label: 'Author' },
  { id: 'genre', label: 'Genre' }
];

let editSpy, component;
beforeEach(() => {
  component = mount(
    <Provider store={store}>
      <Router>
        <BookTable rows={rows} columns={columns} />
      </Router>
    </Provider>
  );
});

describe('Testing BookTable component', () => {
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
