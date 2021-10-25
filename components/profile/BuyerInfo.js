import { Button, Descriptions } from "antd"

// todo get buyer info
const BuyerInfo = (props) => {
  return (
    <>
      <Descriptions title="Buyer Profile" bordered>
        <Descriptions.Item label="Name" span={3}>
          {props.name}
        </Descriptions.Item>
        <Descriptions.Item label="Email" span={3}>
          {props.email}
        </Descriptions.Item>
        <Descriptions.Item label="Address" span={3}>
          123 Singapore Street
        </Descriptions.Item>
      </Descriptions>
      {/* <br />
      <Button name="edit profile" size="large" type="primary">
        Edit Profile
      </Button> */}
    </>
  )
}

export default BuyerInfo
