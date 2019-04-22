import React from "react";
import Nav from "./Nav";
import "./App.css";
import ItemPage from './ItemPage';
import {
  items
} from './static-data';


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
      cart: [
        ...this.state.cart,
        item.id
      ]
      
    });
    console.log(this.state.cart);
  };



  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return (
          <ItemPage
            items={items}
            onAddToCart={
              this.handleAddToCart
            }
          />
        );
      case 1:
        return <span>Cart</span>;
    }
  }
  render() {
    let { activeTab } = this.state;
    return (
      <div className="App">
        <Nav
          activeTab={activeTab}
          onTabChange={
            this.handleTabChange
          }
        />
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}


export default App;