import React from 'react';
import HeaderMenu from '../../component/Header/HeaderMenu';
import Footer from '../../component/Header/Footer';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <HeaderMenu />

        <Footer />
      </Container>

    </div>
  );
}

export default App;
