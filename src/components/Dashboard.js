import { Layout, Menu, Breadcrumb, message } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import React from 'react';
import 'antd/dist/antd.css';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function HandleMenuClick(e) {
    var account=" ACCOUNT HOLDER DETAILS -"+"\n"+" Name : SHUBHAM SINHA \n Mobile No. : 9722079343 "
    document.getElementById("content").innerHTML=account;
  }
  
const Dashboard=()=>{
    return (
        <Layout>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href='http://localhost:3000/login'>LogOut</a></Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="4">Welcome To SCPay</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Username">
            <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">
            Personal Details
            </a></Menu.Item>
            <Menu.Item key="2" onClick={HandleMenuClick}>Bank Account</Menu.Item>
            <Menu.Item key="3">Check Balance</Menu.Item>
            <Menu.Item key="4">Transaction History</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Add Money">
            <Menu.Item key="5">Bank Account</Menu.Item>
            <Menu.Item key="6">UPI</Menu.Item>
            <Menu.Item key="7">Debit Card</Menu.Item>
            <Menu.Item key="8">Credit Card</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<LaptopOutlined />} title="Send Money">
            <Menu.Item key="9">Pay</Menu.Item>
            <Menu.Item key="10">Deposit</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<NotificationOutlined />} title="Update Details">
            <Menu.Item key="11">Personal Details</Menu.Item>
            <Menu.Item key="12">Upload Aadhar Card</Menu.Item>
            <Menu.Item key="13">Upload PAN Card</Menu.Item>
            <Menu.Item key="14">Authorised Doc</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        
          <div id="content">
          Content
          </div>
      </Layout>
    </Layout>
  </Layout>
    );
}

export default Dashboard;