import { Button, Divider, Form, Input, Space } from "antd"
import { signIn } from "next-auth/client"
import React from "react"
import GeneralLayout from "../components/layout/GeneralLayout"

const VendorLogin = () => {
  const onFinish = (values) => {
    console.log(values)
    signIn("credentials", { ...values })
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <GeneralLayout>
      <div style={{ textAlign: "center", padding: "2em" }}>
        <Divider style={{ fontWeight: "bold", fontSize: "2em" }}>
          Login as Vendor
        </Divider>

        <Space direction="vertical">
          <Form
            name="basic"
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Space>

        <Divider style={{ fontWeight: "bold" }}>Register as Vendor</Divider>
        <div style={{ fontSize: "1.2em", padding: "0em 8em" }}>
          <p>
            Not registered yet? Apply as a vendor on Pasar Local via the form
            below!
          </p>
          <p>
            In order to apply, you must be a registered Small-Medium Enterprise
            (SME) based in Singapore. Our dedicated team will verify your
            business information get back to you in 2-3 business days with your
            account details.
          </p>
          <p>
            With a Pasar Local vendor account, you will be listed as a vendor in
            our Vendor List, and have the ability to sell your products in our
            Marketplace.
          </p>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfxqX3g6nDIeIIOupwXLI072YjT-TuIAVTBcKqQ-EVcReU-CQ/viewform?embedded=true"
          width="600"
          height="600"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </GeneralLayout>
  )
}

export default VendorLogin
