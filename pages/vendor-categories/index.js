import { HomeOutlined, UserOutlined } from "@ant-design/icons"
import { Breadcrumb, Col, Layout, Pagination, Row } from "antd"
import GeneralLayout from "../../components/layout/GeneralLayout"
import VendorCard from "../../components/vendor/VendorCard"
import VendorCardList from "../../components/vendor/VendorCardList"
import VendorPageSidebar from "../../components/vendor/VendorPageSidebar"

const { Header, Footer, Sider, Content } = Layout

const VendorCategories = () => {
  return (
    <GeneralLayout activeMenuItem="vendors">
      <Breadcrumb style={{ padding: "2em 0.5em 0" }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/vendor-categories">
          Vendor Categories
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row gutter={[20, 20]} style={{ paddingTop: "2em" }}>
        <Col span={4}>
          <VendorPageSidebar />
        </Col>
        <Col span={20}>
          <VendorCardList />
        </Col>
      </Row>
    </GeneralLayout>
  )
}

export default VendorCategories
