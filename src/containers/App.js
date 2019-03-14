import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../assets/images/oldspice.svg';
import { connect } from 'react-redux';
import { removeItem, addItem } from '../actions';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Loader from './Loader';
import Footer from './Footer'



const App = ({ data, items, cart, add, remove, itemCount }) => (
  <main>
    <Router basename={'/'}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="Old Spice" />
          <nav className="App-nav">
            <ul>
              <li>
                <Link className="home-nav" to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/shop`}>Shop</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/cart`}>Cart</Link>({itemCount})
              </li>
            </ul>
          </nav>
        </header>
        <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => <Home data={data} />} />
        <Route path={`${process.env.PUBLIC_URL}/shop`} render={() => <Shop items={items} add={add} />} />
        <Route path={`${process.env.PUBLIC_URL}/cart`} render={() => <Cart cart={cart} remove={remove} />} />
           <Footer />
      </div>
    </Router>
    <Loader />
  </main>
);

const mapStateToProps = state => ({
  data: state.configuration.data,
  cart: state.configuration.cart,
  items: state.configuration.items,
  itemCount: state.configuration.itemCount,
});

const mapDispatchToProps = (dispatch, props) => ({
  add: item => dispatch(addItem(item)),
  remove: item => dispatch(removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
