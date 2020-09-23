import React, { Component } from 'react'
import Header from '../../components/Header/Header'

class NotFoundRoute extends Component {
  render() {
    return (
      <section className="container">
        <Header />
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
      </section>
    );
  }
}

export default NotFoundRoute
