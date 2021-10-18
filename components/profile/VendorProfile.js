import {
  EyeOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Row, Col, Image, Descriptions, Layout, Menu } from "antd"
import { useSession } from "next-auth/client"
import styles from "../home/BannerCarousel.module.css"

const { Sider, Content, Footer } = Layout
const VendorProfile = () => {
  const [session, loading] = useSession()

  return (
    <>
      <Layout>
        <Sider width={250}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              My Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<EyeOutlined />}>
              View My Products
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Upload New Product
            </Menu.Item>
            <Menu.Item key="4" icon={<UnorderedListOutlined />}>
              View Orders
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: "91.2vh",
            }}
          >
            <Row gutter={24}>
              <Col span={10}>
                <Image
                  className={styles.contentStyle}
                  alt={"vendor profile picture"}
                  src="https://visme.co/blog/wp-content/uploads/2020/12/header-19.png"
                />
              </Col>
              <Col span={12}>
                <Descriptions bordered>
                  <Descriptions.Item label="Name" span={3}>
                    get user name
                  </Descriptions.Item>
                  <Descriptions.Item label="Email" span={3}>
                    get user email
                  </Descriptions.Item>
                  <Descriptions.Item label="Description" span={3}>
                    get user email
                  </Descriptions.Item>
                  <Descriptions.Item label="Website Link" span={3}>
                    get website link
                  </Descriptions.Item>
                  <Descriptions.Item label="Social Media Links" span={3}>
                    get social media
                  </Descriptions.Item>
                  <Descriptions.Item label="Address" span={3}>
                    get user address
                  </Descriptions.Item>
                  <Descriptions.Item label="Category" span={3}>
                    get user category
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default VendorProfile
