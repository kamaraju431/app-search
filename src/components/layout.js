import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import AdminForm from '../pages/form';
import {
  BrowserRouter as Router
} from "react-router-dom";
const { Header, Content, Sider } = Layout;
//const { SubMenu } = Menu;

class SiderDemo extends Component {
  state = {
    collapsed: false,
    selectedKey: '1',
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" ><span style={{ color: 'white',fontSize:'2rem',marginLeft:'20%' }}>Lowe's</span> </div>
            <Menu theme="dark" mode="inline">
              <Menu.Item key="1" >
                <Icon type="team" />
                <span>Customers</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
            {/* <span style={{ color: 'black',fontSize:'2rem' }}>Customers</span> */}
            </Header>
            <Content>

              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '8px 0' }}>
                </Breadcrumb>
                <div style={{ padding: 14, background: '#fff', minHeight: 360 }}>
                  <AdminForm />
                </div>
              </Content>
            </Content>
          </Layout>
        </Layout>
      </Router>

    );
  }
}
export default SiderDemo;