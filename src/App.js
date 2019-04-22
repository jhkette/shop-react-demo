import React from "react";
import Nav from "./Nav";
import "./App.css";
import ItemPage from "./ItemPage";
import { items } from "./static-data";
import CartPage from "./CartPage";

class App extends React.Component {
  state = {
    activeTab: 0,
    cart: []
  };

  handleAddToCart = item => {
    this.setState({
      // spreading items into cart

      // ie
      //  var a = [1, 2, 3];
      // => [[1, 2, 3], 4]
      //  var c = [...a, 4];
      // => [1, 2, 3, 4]
      cart: [...this.state.cart, item.id]
    });
    console.log(this.state.cart);
  };

  handleTabChange = index => {
    this.setState({
      activeTab: index
    });
  };

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
      case 1:
        return this.renderCart();
    }
  }
  // The reduce function works like a summation operation. It takes an optional initial value ({} here),
  //  and then calls the given function with the accumulated total and the current array item. The value
  //  returned from the function becomes the new total, and it moves on to the next item in the array. When
  //  reduce is done, it returns the final total.Ceddia, Dave. Pure React: A step-by-step guide to mastering React. . Kindle Edition.

  renderCart() {
    // Count how many of each item
    // is in the cart
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});

    // Create an array of items
    let cartItems = Object.keys(itemCounts).map(itemId => {
      // Find the item by its id
      var item = items.find(item => item.id === parseInt(itemId, 10));

      // Create a new "item" that
      // also has a 'count' property
      return {
        ...item,
        count: itemCounts[itemId]
      };
    });

    return <CartPage items={cartItems} />;
  }

  render() {
    let { activeTab } = this.state;
    return (
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
        <main className="App-content">{this.renderContent()}</main>
      </div>
    );
  }
}

export default App;
