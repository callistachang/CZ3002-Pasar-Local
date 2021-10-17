import { HomeOutlined, UserOutlined } from "@ant-design/icons"
import { Breadcrumb, Col, Layout, Pagination, Row } from "antd"
import { useRouter } from "next/dist/client/router"
import GeneralLayout from "../../../components/layout/GeneralLayout"
import VendorCardList from "../../../components/vendor/VendorCardList"
import VendorPageSidebar from "../../../components/vendor/VendorPageSidebar"

const VendorCategory = () => {
  const router = useRouter()
  const { category } = router.query

  return (
    <>
      <GeneralLayout activeMenuItem="vendors">
        <Breadcrumb style={{ padding: "2em 0.5em 0" }}>
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/vendor-categories">
            Categories
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <span>{category}</span>
          </Breadcrumb.Item>
        </Breadcrumb>

        <Row gutter={[20, 20]} style={{ paddingTop: "2em" }}>
          <Col sm={{ span: 4 }}>
            <VendorPageSidebar />
          </Col>
          <Col sm={{ span: 20 }}>
            <VendorCardList />
          </Col>
        </Row>
      </GeneralLayout>
    </>
  )
}

export default VendorCategory