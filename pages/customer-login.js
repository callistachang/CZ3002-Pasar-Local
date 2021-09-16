import { GoogleCircleFilled } from "@ant-design/icons"
import { Button, Form, Input, Row, Space } from "antd"
import { getProviders, signIn, useSession } from "next-auth/client"
import { useRouter } from "next/router"
import React from "react"
import GeneralLayout from "../components/layout/GeneralLayout"

const CustomerLogin = ({ providers }) => {
  const router = useRouter()
  const [session, loading] = useSession()

  const onFinish = (values) => {
    console.log("Success:", values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  if (typeof router.query.callbackUrl !== "undefined") {
    router.push("/")
  }

  return (
    <GeneralLayout activeMenuItem="customer-login">
      {/* <Space direction="vertical">
        <Form
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Space> */}
      <Row justify="center" align="middle" style={{ minHeight: "80vh" }}>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button
              type="primary"
              shape="round"
              icon={<GoogleCircleFilled />}
              size="large"
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </Row>
    </GeneralLayout>
  )
}

export default CustomerLogin

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
