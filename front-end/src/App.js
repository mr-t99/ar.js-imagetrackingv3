import React, { Component } from 'react';
import './App.less';

import Home from "./components/home/home";
import ViewUpload from "./components/upload/view";
import Sl from "./components/upload/selectGroup";

import Logo from "./logo.png";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Menu } from "antd";
import { FullscreenOutlined, VerticalAlignTopOutlined, createFromIconfontCN, FacebookOutlined } from "@ant-design/icons";
// const { SubMenu } = Menu;

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: 'Home',
    }
  }
  handleClick = e => {
    this.setState({ current: e.key });
  };
  iconjs = () => {
    const IconFont = createFromIconfontCN({
      scriptUrl: [
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
      ],
    });
    return (<IconFont type="icon-javascript" />);
  }

  render() {
    // console.log(process.env.REACT_APP_API_URL);
    const { current } = this.state;
    return (
      <Router>
        <div className="App">
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <img width="250" height="100" src={Logo} />
            <Menu.Item key="Home" icon={<this.iconjs />} onClick={this.clickHome}>
              <Link to="/">
                Ar.js Image Tracking
              </Link>
            </Menu.Item>
            <Menu.Item key="Upload" icon={<VerticalAlignTopOutlined />}>
            <Link to="/upload">
            Upload Conten
            </Link>
        </Menu.Item>
            <Menu.Item key="Ar" icon={<FullscreenOutlined />}>
        <Link to="/ar">
        Ar.js web
        </Link>
        </Menu.Item>

            <Menu.Item key="About" icon={<FacebookOutlined />}>
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                ABOUT AT ME
          </a>
            </Menu.Item>
          </Menu>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload" component={ViewUpload} />
          <Route path="/ar" component={this.Ar} />
        </Switch>
      </Router>
    );
  }
}

export default App;