import { GoogleCircleFilled } from "@ant-design/icons"
import { Button, Divider, Row } from "antd"
import { getProviders, signIn, useSession } from "next-auth/client"
import React from "react"
import GeneralLayout from "../components/layout/GeneralLayout"

const CustomerLogin = ({ providers }) => {
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
