import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

/*
 * Renders navigation bar
 */
export default function Navigation({ user }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navLinks = isAuthenticated
    ? [
        {
          title: 'Home',
          path: '/home'
        },
        {
          title: 'Users',
          path: '/users'
        },
        {
          title: 'Books',
          path: '/books'
        },
        {
          title: 'Logout',
          path: '/login'
        }
      ]
    : [
        {
          title: 'Sign up',
          path: '/sign-up'
        },
        {
          title: 'Login',
          path: '/login'
        }
      ];
  return (
    <nav className='site-navigation'>
      <span className='menu-title'>My Library</span>
      <div className={`menu-content-container`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} activeStyle={{ color: 'red' }}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
