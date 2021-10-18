import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Row,
  Tag,
} from "antd"
import Image from "next/image"
import VendorCardList from "./VendorCardList"
import ProductCardList from "../product/ProductCardList"

const VendorDetail = (props) => {
  console.log(props)
  return (
    <>
      <Row gutter={[40, 20]}>
        <Col sm={{ span: 8 }}>
          <Image
            alt="product"
            height={400}
            width={400}
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </Col>
        <Col sm={{ span: 16 }} gutter={[16, 24]}>
          <Descriptions title={props.name} bordered>
            <Descriptions.Item label="Name" span={3}>
              {props.name}
            </Descriptions.Item>
            <Descriptions.Item label="Address" span={3}>
              {props.address}
            </Descriptions.Item>
            <Descriptions.Item label="Description" span={3}>
              {props.description}
            </Descriptions.Item>
            <Descriptions.Item label="Instagram" span={1.5}>
              {props.instagram}
            </Descriptions.Item>
            <Descriptions.Item label="Facebook" span={1.5}>
              {props.facebook}
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={1.5}>
              {props.email}
            </Descriptions.Item>
            <Descriptions.Item label="Phone" span={1.5}>
              {props.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Website" span={1}>
              {props.website}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Divider
        orientation="left"
        style={{ paddingTop: "0.5em", fontSize: "2em" }}
      >
        Products by Nike
      </Divider>
      <ProductCardList />
    </>
  )
}

export default VendorDetail
