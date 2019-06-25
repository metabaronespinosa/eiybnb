import React from 'react';

import './style.scss';

export default class HomePage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <article>
        <div className="home-page">
          <section className="centered">
            <h2>Eiybnb</h2>
            <p></p>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {};
