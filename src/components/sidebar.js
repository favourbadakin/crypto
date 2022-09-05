import React from "react";
import { stack as Menu } from "react-burger-menu";

// eslint-disable-next-line
export default (props) => {
  return (
    // Pass on our props
    <Menu right {...props}>
      <a className="menu-item" href="/#">
        Products
      </a>

      <a className="menu-item" href="/#">
        Features
      </a>

      <a className="menu-item" href="/#">
        About
      </a>

      <a className="menu-item" href="/contact">
        Contact 
      </a>
    </Menu>
  );
};
