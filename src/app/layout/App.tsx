import React from 'react';
import HeaderMenu from '../../component/Header/HeaderMenu';
import Footer from '../../component/Footer/Footer';
import { Container, Segment } from 'semantic-ui-react';
import Product from '../../component/Products/Product';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <HeaderMenu />
        <Product />
        <Footer />
      </Container>

    </div>
  );
}

export default App;
