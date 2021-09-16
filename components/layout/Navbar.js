import {
  HeartOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  SkinOutlined,
  CoffeeOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import SubMenu from "antd/lib/menu/SubMenu"
import { useRouter } from "next/dist/client/router"
import Cart from "./Cart"
import styles from "./Layout.module.css"
import { useSession } from "next-auth/client"

const Navbar = (props) => {
  const router = useRouter()
  const [session, loading] = useSession()

  return (
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
          onClick={() => router.push("/vendor-categories/fashion")}
        >
          Fashion
        </Menu.Item>
        <Menu.Item
          key="vendors:food"
          icon={<CoffeeOutlined />}
          onClick={() => router.push("/vendor-categories/food")}
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

      {/* User is logged in */}
      {session && (
        <Menu.Item className={styles.floatRight}>
          Signed in as {session.user.name} (User)
        </Menu.Item>
      )}

      {/* User is not logged in */}
      {!session && (
        <>
          <Menu.Item
            className={styles.floatRight}
            key="Customer Login"
            icon={<UserOutlined />}
            onClick={() => router.push("/customer-login")}
          >
            Customer Login
          </Menu.Item>
          <Menu.Item
            className={styles.floatRight}
            key="Vendor Login"
            icon={<HeartOutlined />}
            onClick={() => router.push("/vendor-login")}
          >
            Vendor Login
          </Menu.Item>
        </>
      )}
    </Menu>
  )
}

export default Navbar
