import { Descriptions } from "antd"

const BuyerOrder = () => {
  return (
    <>
      todo: add analytics todo:: for each order put in descriptions
      <Descriptions title="Order" bordered>
        <Descriptions.Item label="Order No" span={3}>
          get order number
        </Descriptions.Item>
        <Descriptions.Item label="Amount Paid" span={3}>
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
