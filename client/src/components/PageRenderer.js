import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

const generatePage = page => {
  const component = () => require(`./pages/${page}`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    return React.createElement(() => '404 - Page Not Found');
  }
};

/*
 * Render Navigation menu pages
 */
export default function PageRenderer() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const {
    params: { page }
  } = useRouteMatch();

  return !isAuthenticated && (page === 'users' || page === 'books')
    ? generatePage('login')
    : generatePage(page);
}
