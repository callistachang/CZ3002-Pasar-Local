import { Button, Descriptions, Form, Input, InputNumber } from "antd"

// todo get buyer info
const BuyerEditInfo = () => {
  const [form] = Form.useForm()
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        // todo: add initial values todo: add submit form
        initialValues={{ productName: "formLayout" }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
          tooltip="This is a required field"
        >
          <Input placeholder="Enter Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input an email!",
            },
          ]}
          tooltip="This is a required field"
        >
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input an address!",
            },
          ]}
          tooltip="This is a required field"
        >
          <Input placeholder="Enter Address" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default BuyerEditInfo
