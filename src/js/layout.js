  
import React, { Component } from 'react';

import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/home';
import AppTodo from './views/AppTodo';
import Post from './pages/Post';

class App extends Component {

  render() {
    return(
      <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/todos' component={AppTodo} />
          <Route path='/:post_id' component={Post} />
      </BrowserRouter>
    )
  }
}

export default App;