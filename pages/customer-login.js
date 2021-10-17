import { GoogleCircleFilled } from "@ant-design/icons"
import { Button, Form, Input, Row, Space, Divider } from "antd"
import { getProviders, signIn, useSession, signOut } from "next-auth/client"
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
      <div style={{ padding: "2em" }}>
        <Divider style={{ fontWeight: "bold", fontSize: "2em" }}>
          Login as Customer
        </Divider>

        <Row justify="center" align="middle">
          <Button
            type="primary"
            shape="round"
            icon={<GoogleCircleFilled />}
            size="large"
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </Button>
        </Row>
      </div>
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
