import { Layout, Menu } from "antd"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UnorderedListOutlined,
  UploadOutlined,
} from "@ant-design/icons"
import React, { useState } from "react"
import AccountLayout from "../components/layout/AccountLayout"

const { Header, Sider, Content } = Layout

const SiderDemo = () => {
  return (
    <AccountLayout>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfxqX3g6nDIeIIOupwXLI072YjT-TuIAVTBcKqQ-EVcReU-CQ/viewform?embedded=true"
        width="640"
        height="382"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </AccountLayout>
  )
}

export default SiderDemo
