import { Descriptions, Button } from "antd"

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
      <br />
      <br />
      <Button type="primary" block>
        EDIT PROFILE
      </Button>
    </>
  )
}

export default BuyerInfo
