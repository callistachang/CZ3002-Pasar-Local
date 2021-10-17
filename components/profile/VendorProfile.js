import {
  EyeOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Layout, Menu } from "antd"
import { useSession } from "next-auth/client"

const { Sider, Content, Footer } = Layout
const VendorProfile = () => {
  const [session, loading] = useSession()

  return (
    <>
      <Layout>
        <Sider width={250}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
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
            Vendor Profile
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default VendorProfile
