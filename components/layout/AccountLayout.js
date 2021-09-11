import { Layout, Menu } from "antd"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UnorderedListOutlined,
  UploadOutlined,
} from "@ant-design/icons"
import React, { useState } from "react"

const { Header, Sider, Content } = Layout

const SiderDemo = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          // position: "fixed",
          left: 0,
        }}
      >
        <div className="logo">Pasar Local</div>
        {/* <div className="logo" /> */}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            My Account
          </Menu.Item>
          <Menu.Item key="2" icon={<UploadOutlined />}>
            My Products
          </Menu.Item>
          <Menu.Item key="3" icon={<UnorderedListOutlined />}>
            View Orders
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={toggle} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={toggle} />
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            padding: "overflow",
          }}
        >
          .../
        </Content>
      </Layout>
    </Layout>
  )
}

export default SiderDemo
