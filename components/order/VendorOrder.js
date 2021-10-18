import { UnorderedListOutlined, UserOutlined } from "@ant-design/icons"
import { Descriptions, Layout, Menu } from "antd"
import { useSession } from "next-auth/client"

const { Sider, Content, Footer } = Layout
const VendorOrder = () => {
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
            todo:: for each order put in descriptions
            <Descriptions title="Order" bordered>
              <Descriptions.Item label="Order No" span={3}>
                get order number
              </Descriptions.Item>
              <Descriptions.Item label="Amount Paid">
                get amount paid
              </Descriptions.Item>
              <Descriptions.Item label="Order time">
                get order time
              </Descriptions.Item>
              <Descriptions.Item label="Collection Time" span={2}>
                get collection time
              </Descriptions.Item>
              <Descriptions.Item label="Items Bought">
                For item in items bought add item, print line
                <br />
                For item in items bought add item, print line
              </Descriptions.Item>
            </Descriptions>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default VendorOrder
