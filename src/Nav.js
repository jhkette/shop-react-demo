
// Another note about this: it’s generally a bad idea to create new functions to pass into props 
// like (this code was), but it’s worth understanding why, so you can apply the rule when it makes sense. 
// The reason it’s bad to create new functions is for performance: not because functions 
// are expensive to create, but because passing a new function down to a pure component every time 
// it renders means that it will always see “new” props, and therefore always re-render (needlessly). 
// Avoid creating a new function in render when (a) the child component receiving the function prop is pure and (b) 
// you expect the parent component to re-render often.


// Function components and classes that extend Component are not pure. They will always re-render, 
// even if their props haven’t changed. If a class extends PureComponent instead, though, it is pure and it will skip 
// re-rendering when its props are unchanged. Avoiding needless re-renders is the easiest way to improve performance in a React app.





import React from "react";

const Nav = ({
  activeTab,
  onTabChange
}) =>
  <nav className="App-nav">
    <ul>
      <li
        className={`App-nav-item ${
          activeTab === 0 &&
          "selected"}`}
      >
        <NavLink
          index={0}
          onClick={onTabChange}
        >
          Items
        </NavLink>
      </li>
      <li
        className={`App-nav-item ${
          activeTab === 1 &&
          "selected"}`}
      >
        <NavLink
          index={1}
          onClick={onTabChange}
        >
          Cart
        </NavLink>
      </li>
    </ul>
  </nav>;
  
  export default Nav;


  // Here, the handleClick function will only be created once, when the component is rendered the first time.

class NavLink
extends React.Component {
  handleClick = () => {
    this.props.onClick(
      this.props.index
    );
  };

  render() {
    return (
      <a onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }

}
