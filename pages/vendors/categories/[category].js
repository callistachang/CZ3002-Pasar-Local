import { HomeOutlined, UserOutlined } from "@ant-design/icons"
import { Breadcrumb, Col, Layout, Pagination, Row, Divider } from "antd"
import { useRouter } from "next/dist/client/router"
import GeneralLayout from "../../../components/layout/GeneralLayout"
import VendorCardList from "../../../components/vendor/VendorCardList"
import VendorPageSidebar from "../../../components/vendor/VendorPageSidebar"
import GoogleMapReact from "google-map-react"
import { useState } from "react"
import VendorMap from "../../../components/vendor/VendorMap"

const VendorCategory = () => {
  const router = useRouter()
  const { category } = router.query
  const [markerList, setMarkerList] = useState([
    { id: "Aasdfasdf", lat: 1.35, lng: 103.82 },
    { id: "Basdfjasdjf", lat: 1.36, lng: 103.82 },
  ])
  const AnyReactComponent = ({ text }) => <div>{text}</div>

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

        <Divider style={{ fontSize: "2em" }}>Vendor Map</Divider>
        <VendorMap />

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
