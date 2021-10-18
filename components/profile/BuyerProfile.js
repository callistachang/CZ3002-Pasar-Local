import { UnorderedListOutlined, UserOutlined } from "@ant-design/icons"
import { Descriptions, Layout, Menu } from "antd"
import { useSession } from "next-auth/client"
import { useState } from "react"
import BuyerOrder from "../order/BuyerOrder"
import BuyerInfo from "./BuyerInfo"

const { Sider, Content, Footer } = Layout
const BuyerProfile = () => {
  const [render, updateRender] = useState(1)

  const components = {
    1: <BuyerInfo />,
    2: <BuyerOrder />,
  }

  const handleMenuClick = ({ key }) => {
    updateRender(key)
  }

  return (
    <>
      <Layout>
        <Sider width={200}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
            onClick={handleMenuClick}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              My Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<UnorderedListOutlined />}>
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

export default BuyerProfile
