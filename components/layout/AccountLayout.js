import {
  UnorderedListOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Layout, Menu } from "antd"
import { useRouter } from "next/dist/client/router"
import React from "react"
import GeneralLayout from "./GeneralLayout"
import styles from "./Layout.module.css"

const { Sider, Content, Footer } = Layout

const AccountLayout = (props) => {
  const router = useRouter()

  return (
    <>
      <GeneralLayout>
        <Layout style={{ margin: "100px" }}>
          <Sider>
            {/* <a
              className={styles.logo}
              style={{ margin: "0.3em 1.5em" }}
              onClick={() => router.push("/")}
            >
              Pasar Local
            </a> */}
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                My Account
              </Menu.Item>
              <Menu.Item key="2" icon={<UploadOutlined />}>
                My Products
              </Menu.Item>
              <Menu.Item key="3" icon={<UnorderedListOutlined />}>
                View Orders
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content className={styles.siteLayoutBackground}>
              {props.children}
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Pasar Local © 2021 Created by Team SmartLocal
            </Footer>
          </Layout>
        </Layout>
      </GeneralLayout>
    </>
  )
}

export default AccountLayout
