import { Descriptions } from "antd"

const BuyerOrder = (props) => {
  console.log(props.orders)
  return (
    <>
      {Object.entries(props.orders.items).map(([i, order]) => {
        const completionDate = new Date(order.completionDate)
        return (
          <>
            <Descriptions title={`Order #${parseInt(i) + 1}`} bordered>
              <Descriptions.Item label="Order No" span={3}>
                {order.token}
              </Descriptions.Item>
              <Descriptions.Item label="Amount Paid" span={1}>
                {order.adjustedAmount} SGD
              </Descriptions.Item>
              <Descriptions.Item label="Order Time" span={2}>
                {completionDate.toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label="Billing Address" span={3}>
                {order.billingAddressAddress1}
                <br />S{order.billingAddressPostalCode}
              </Descriptions.Item>
              <Descriptions.Item label="Items Bought">
                {Object.entries(order.items).map(([i, item]) => {
                  return (
                    <>
                      <b>{item.name}</b> | ${item.unitPrice} (Quantity:{" "}
                      {item.quantity})
                    </>
                  )
                })}
              </Descriptions.Item>
            </Descriptions>
            <br />
          </>
        )
      })}
    </>
  )
}

export default BuyerOrder
