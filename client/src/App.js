import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

//import './stylesheets/App.scss';
import Navigation from './components/Navigation';
import PageRenderer from './components/PageRenderer';
import UserForm from './components/UserForm';
import BookForm from './components/BookForm';

function App() {
  //const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <Navigation />
          <Switch>
            {/* <Route exact path='/UserForm'>
            {!isAuthenticated ? <Redirect to='/' /> : <UserForm />}
          </Route> */}
            <Route exact path='/UserForm' component={UserForm} />
            <Route exact path='/BookForm' component={BookForm} />
            <Route path='/:page' component={PageRenderer} />
            <Route path='/' render={() => <Redirect to='/home' />} />
            <Route component={() => 404} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
