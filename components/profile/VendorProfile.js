import {
  EyeOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons"
import {Layout, Menu } from "antd"
import { useState } from "react"
import VendorOrder from "../order/VendorOrder"
import VendorInfo from "./VendorInfo"
import VendorViewProduct from "./VendorViewProduct"
import VendorAddProduct from "./VendorAddProduct"

const { Sider, Content } = Layout
const VendorProfile = () => {
  const [render, updateRender] = useState(1)

  const components = {
    1: <VendorInfo />, //If vendor clicks on the first menu item, the content shown is VendorInfo
    2: <VendorViewProduct/>,
    3: <VendorAddProduct/>,
    4: <VendorOrder />,
  }

  const handleMenuClick = ({ key }) => {
    updateRender(key)
  }

  return (
    <>
      <Layout>
        <Sider width={250}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[render]}
            style={{ height: "100%", borderRight: 0 }}
            onClick={handleMenuClick}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              My Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<EyeOutlined />}>
              View My Products
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Upload New Product
            </Menu.Item>
            <Menu.Item key="4" icon={<UnorderedListOutlined />}>
              View Orders
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: "91.2vh",
            }}
          >
            {components[render]}
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default VendorProfile
