import { Layout, Menu, Breadcrumb, Row, Col } from "antd"
import styles from "./Layout.module.css"

import {
  TeamOutlined,
  ShopOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons"
const { Header, Content, Footer } = Layout

import { useRouter } from "next/dist/client/router"
import Cart from "./Cart"

const GeneralLayout = (props) => {
  const router = useRouter()

  const leftAlignedMenuItems = [
    {
      name: "Vendors",
      key: "vendors",
      icon: <TeamOutlined />,
      href: "/vendors",
    },
    {
      name: "Marketplace",
      key: "products",
      icon: <ShopOutlined />,
      href: "/products",
    },
  ]

  const rightAlignedMenuItems = [
    {
      name: "Customer Login",
      key: "customer-login",
      icon: <UserOutlined />,
      href: "/customer-login",
    },
    {
      name: "Vendor Login",
      key: "vendor-login",
      icon: <HeartOutlined />,
      href: "/vendor-login",
    },
  ]

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <a className={styles.logo} onClick={() => router.push("/")}>
          Pasar Local
        </a>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[props.activeMenuItem]}
        >
          {leftAlignedMenuItems.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => router.push(item.href)}
            >
              {item.name}
            </Menu.Item>
          ))}

          <Menu.Item className={styles.floatRight}>
            <Cart />
          </Menu.Item>

          {rightAlignedMenuItems.map((item) => (
            <Menu.Item
              className={styles.floatRight}
              key={item.key}
              icon={item.icon}
              onClick={() => router.push(item.href)}
            >
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: "0 5em" }}>{props.children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Pasar Local © 2021 Created by Team SmartLocal
      </Footer>
    </Layout>
  )
}

export default GeneralLayout
