import {
  EyeOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Row, Col, Image, Descriptions, Layout, Menu } from "antd"
import { useSession } from "next-auth/client"
import { useState } from "react"
import styles from "../home/BannerCarousel.module.css"
import VendorOrder from "../order/VendorOrder"
import VendorInfo from "./VendorInfo"

const { Sider, Content, Footer } = Layout
const VendorProfile = () => {
  const [render, updateRender] = useState(1)

  const components = {
    1: <VendorInfo />, //If vendor clicks on the first menu item, the content shown is VendorInfo
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
