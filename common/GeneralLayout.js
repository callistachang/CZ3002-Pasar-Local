import { Layout, Menu, Breadcrumb } from "antd"
import styles from "./GeneralLayout.module.css"

const { Header, Content, Footer } = Layout
import React, { useState } from "react"
import BannerCarousel from "../components/home/BannerCarousel"

const GeneralLayout = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className={styles.logo} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Vendors</Menu.Item>
          <Menu.Item key="2">Marketplace</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        {/* <div className={styles.siteLayoutContent}>Content</div> */}
        <BannerCarousel />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default GeneralLayout
