import {Button, Descriptions} from "antd"

// todo get buyer info
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
      <br/>
      <Button name="edit profile" size="large" type="primary">Edit Profile</Button>
    </>
  )
}

export default BuyerInfo
