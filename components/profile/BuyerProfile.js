import { UnorderedListOutlined, UserOutlined } from "@ant-design/icons"
import { Descriptions, Layout, Menu } from "antd"
import { useSession } from "next-auth/client"

const { Sider, Content, Footer } = Layout
const BuyerProfile = () => {
  const [session, loading] = useSession()

  return (
    <>
      <Layout>
        <Sider width={200}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
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
            <Descriptions title="Buyer Profile" bordered>
              <Descriptions.Item label="Name" span={3}>
                get user name
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={3}>
                get user email
              </Descriptions.Item>
              <Descriptions.Item label="Address" span={3}>
                get user address
              </Descriptions.Item>
            </Descriptions>
            ,
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default BuyerProfile
