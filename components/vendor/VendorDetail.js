import { Col, Descriptions, Divider, Row } from "antd"
import Image from "next/image"
import VendorMap from "./VendorMap"
import VendorProductCardList from "./VendorProductCardList"

const VendorDetail = (props) => {
  return (
    <>
      <Row gutter={[10, 10]}>
        <Col sm={{ span: 8 }}>
          <Image
            alt="Vendor"
            src={props.vendorLogoLink}
            layout="responsive"
            width="100%"
            height="80%"
            objectFit="contain"
            quality={50}
          />
        </Col>
        <Col sm={{ span: 16 }} gutter={[10, 10]}>
          <Descriptions title={props.name} bordered>
            <Descriptions.Item label="Name" span={3}>
              {props.name}
            </Descriptions.Item>
            <Descriptions.Item label="Address" span={3}>
              {props.addressLocation}
            </Descriptions.Item>
            <Descriptions.Item label="Description" span={3}>
              {props.description}
            </Descriptions.Item>
            <Descriptions.Item label="Instagram" span={1.5}>
              <a>{props.instagram}</a>
            </Descriptions.Item>
            <Descriptions.Item label="Facebook" span={1.5}>
              <a>{props.facebook}</a>
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={1.5}>
              <a>{props.email}</a>
            </Descriptions.Item>
            <Descriptions.Item label="Phone" span={1.5}>
              {props.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Website" span={1}>
              <a>{props.website}</a>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <br />
      <br />
      <VendorMap
        markerList={[{ lat: props.latitude, lng: props.longitude }]}
        sizes={{ height: "300px", width: "1472px" }}
        defaultCenter={{ lat: props.latitude, lng: props.longitude }}
        defaultZoom={17}
      />

      {props.noProducts ? null : (
        <>
          <Divider
            orientation="left"
            style={{ paddingTop: "0.5em", fontSize: "2em" }}
          >
            Products by {props.name}
          </Divider>
          <VendorProductCardList data={props.products} />
        </>
      )}
    </>
  )
}
export default VendorDetail
