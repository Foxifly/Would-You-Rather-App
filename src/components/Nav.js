import React, { Component } from "react";

class Nav extends Component {
  state = {
    isLogin: null
  };
  componentDidMount() {
    const { navItems } = this.props;
    if (navItems) {
      //render regular navbar
      this.setState({ isLogin: false });
    } else {
      //render login NAVBAR
      this.setState({ isLogin: true });
    }
  }

  render() {
    const { navItems } = this.state;
    return (
      <div>
        {!navItems && <div>I AM THE LOGIN NAVBAR HEAR ME ROAR</div>}
        {navItems && <div>I AM THE RUGULUR NAVBAR HEAR ME ROAR</div>}
      </div>
    );
  }
}
export default Nav;
