import {
  HeartOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  SkinOutlined,
  CoffeeOutlined,
} from "@ant-design/icons"
import { Layout, Menu } from "antd"
import SubMenu from "antd/lib/menu/SubMenu"
import { useRouter } from "next/dist/client/router"
import Cart from "./Cart"
import styles from "./Layout.module.css"
import { useSession, signIn, signOut } from "next-auth/client"

const { Header, Content, Footer } = Layout

const GeneralLayout = (props) => {
  const router = useRouter()
  // const { data: session } = useSession()

  // const leftAlignedMenuItems = [
  //   {
  //     name: "Vendors",
  //     key: "vendors",
  //     icon: <TeamOutlined />,
  //     href: "/vendors",
  //   },
  //   {
  //     name: "Marketplace",
  //     key: "products",
  //     icon: <ShopOutlined />,
  //     href: "/products",
  //   },
  // ]

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
          <SubMenu
            key="vendors"
            icon={<TeamOutlined />}
            title="Vendors"
            onTitleClick={() => router.push("/vendor-categories")}
          >
            <Menu.Item
              key="vendors:fashion"
              icon={<SkinOutlined />}
              onClick={() => router.push("/vendor-categories/Fashion")}
            >
              Fashion
            </Menu.Item>
            <Menu.Item
              key="vendors:food"
              icon={<CoffeeOutlined />}
              onClick={() => router.push("/vendor-categories/Food")}
            >
              Food
            </Menu.Item>
          </SubMenu>

          <Menu.Item
            key="products"
            icon={<ShopOutlined />}
            onClick={() => router.push("/products")}
          >
            Marketplace
          </Menu.Item>

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
