import {
  CoffeeOutlined,
  HeartOutlined,
  LogoutOutlined,
  ProfileOutlined,
  ShopOutlined,
  SkinOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Menu, Row } from "antd"
import SubMenu from "antd/lib/menu/SubMenu"
import { signOut, useSession } from "next-auth/client"
import { useRouter } from "next/dist/client/router"
import Cart from "./Cart"
import styles from "./Layout.module.css"

const Navbar = (props) => {
  const router = useRouter()
  const [session, loading] = useSession()

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[props.activeMenuItem]}
        className={styles.menuContent}
      >
        <SubMenu
          key="vendors"
          icon={<TeamOutlined />}
          title="Vendors"
          // onTitleClick={() => router.push("/vendor-categories")}
        >
          <Menu.Item
            key="vendors:fashion"
            icon={<SkinOutlined />}
            onClick={() => router.push("/vendors/categories/fashion")}
          >
            Fashion
          </Menu.Item>
          <Menu.Item
            key="vendors:food"
            icon={<CoffeeOutlined />}
            onClick={() => router.push("/vendors/categories/food")}
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
          <Row>
            <Cart />
          </Row>
        </Menu.Item>

        {session && (
          <SubMenu
            key="me"
            icon={<UserOutlined />}
            title={session.user.name}
            className={styles.floatRight}
          >
            <Menu.Item
              key="me:profile"
              icon={<ProfileOutlined />}
              onClick={() => router.push("/profile")}
            >
              My Profile
            </Menu.Item>
            <Menu.Item
              key="me:logout"
              icon={<LogoutOutlined />}
              onClick={() =>
                signOut({ callbackUrl: `${window.location.origin}` })
              }
            >
              Sign Out
            </Menu.Item>
          </SubMenu>
        )}

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
    </>
  )
}

export default Navbar
