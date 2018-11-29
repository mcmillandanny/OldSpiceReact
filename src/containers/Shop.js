import React from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product';

// const Shop = ({ items, add }) => (
//   <div>
//     {items.map((item, index) => {
//       return <Product key={index} item={item} add={add} />;
//     })}
//   </div>
// );


class Shop extends React.Component {

  state = {
    items: this.props.items,
  }

  filterCategory(category) {
    const {items} = this.props;
    const filteredCategory = 
     category === 'All' ? items : items.filter(item => item.category === category);
     console.log(filteredCategory)
     this.setState({items: filteredCategory});
  }
  render() {
    const {items} = this.state;
    const {add} = this.props;

    return (
      <section>
        <nav>
          <span onClick={() => this.filterCategory('All')}>All</span>
          <span onClick={() => this.filterCategory('Soap')}>Soap</span>
          <span onClick={() => this.filterCategory('Colange')}>Cologne</span>
        </nav>
        <div>
          {items.map((item, index) =>  {
            return <Product key={index} item={item} add={add} />

          })}
        </div>
      </section>
    )
  }
}

Shop.propTypes = {
  items: PropTypes.array,
  add: PropTypes.func
};

export default Shop;
