import { UnorderedListOutlined, UserOutlined } from "@ant-design/icons"
import { Descriptions, Layout, Menu } from "antd"
import { useSession } from "next-auth/client"

const { Sider, Content, Footer } = Layout
const BuyerOrder = () => {
  const [session, loading] = useSession()

  return (
    <>
      todo: add analytics todo:: for each order put in descriptions
      <Descriptions title="Order" bordered>
        <Descriptions.Item label="Order No" span={3}>
          get order number
        </Descriptions.Item>
        <Descriptions.Item label="Amount Paid">
          get amount paid
        </Descriptions.Item>
        <Descriptions.Item label="Order time">get order time</Descriptions.Item>
        <Descriptions.Item label="Collection Time" span={2}>
          get collection time
        </Descriptions.Item>
        <Descriptions.Item label="Items Bought">
          For item in items bought add item, print line
          <br />
          For item in items bought add item, print line
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}

export default BuyerOrder
