import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./ItemPage.css";

// importing item then rendering each item componentn for items
function ItemPage({ items, onAddToCart }) {
  return (
    <ul className="ItemPage-items">
      {items.map(item => (
        <li key={item.id} className="ItemPage-item">
          <Item item={item} onAddToCart={() => onAddToCart(item)} />
          <button className="Item-addToCart" onClick={() => onAddToCart(item)}>
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
}
ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;
