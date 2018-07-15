import React, { Component } from 'react';
import './assets/css/App.css';
import { Container, Row, Col } from 'reactstrap';
import logo from './assets/img/logo.png';
import Header from './components/Header';
import Projets from './components/Projets';
import Footers from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <Header />
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <h1 className="App-title">AngeMort</h1>
          </header>
          <Container>
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <p>Bienvenue sur le site officiel AngeMort.</p>
              </Col>
              <Col xs={6} md={6}>
                <Projets />
              </Col>
            </Row>
          </Container>
        </div>
        <Footers />
      </div>
    );
  }
}

export default App;
