import React from 'react';
import { Route } from 'react-router-dom'
import Home from './commons/containers/Home'
import Header from './commons/components/Header'

const App = () => (
  <div>
    <Header />

    <main>
      <Route exact path="/" component={Home} />
    </main>
  </div>
)

export default App;
