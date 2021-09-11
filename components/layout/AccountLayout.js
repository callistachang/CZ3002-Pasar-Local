import { Layout, Menu } from "antd"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UnorderedListOutlined,
  UploadOutlined,
} from "@ant-design/icons"
import React, { useState } from "react"
import styles from "./Layout.module.css"
import { useRouter } from "next/dist/client/router"

const { Header, Sider, Content, Footer } = Layout

const AccountLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <a
          className={styles.logo}
          style={{ margin: "0.3em 1.5em" }}
          onClick={() => router.push("/")}
        >
          Pasar Local
        </a>
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
      <Layout>
        {/* <Header className={styles.siteLayoutBackground}>
          {collapsed ? (
            <MenuUnfoldOutlined className={styles.trigger} onClick={toggle} />
          ) : (
            <MenuFoldOutlined className={styles.trigger} onClick={toggle} />
          )}
        </Header> */}
        <Content className={styles.siteLayoutBackground}>
          {props.children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Pasar Local © 2021 Created by Team SmartLocal
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AccountLayout
