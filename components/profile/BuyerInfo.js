import { Descriptions, Layout, Menu } from "antd"
import { useSession } from "next-auth/client"

const BuyerInfo = () => {
  return (
    <>
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
    </>
  )
}

export default BuyerInfo
