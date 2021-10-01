import { ShoppingOutlined } from "@ant-design/icons"
import { Avatar, Badge, Button, Card, Col, Descriptions, Row, Tag } from "antd"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"

const { Meta } = Card

const ProductDetail = (props) => {
  return (
    <>
      <Row gutter={[40, 20]}>
        <Col sm={{ span: 10 }}>
          <Image
            alt="product"
            height={800}
            width={800}
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </Col>
        <Col sm={{ span: 14 }} gutter={[16, 24]}>
          <Descriptions title={props.name} bordered>
            <Descriptions.Item label="Vendor" span={3}>
              Nice Shop
            </Descriptions.Item>
            <Descriptions.Item label="Price" span={3}>
              ${props.price}
            </Descriptions.Item>
            <Descriptions.Item label="Tags" span={3}>
              {props.tags.map((tag) => {
                let color = tag.length > 5 ? "geekblue" : "green"
                if (tag === "loser") {
                  color = "volcano"
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                )
              })}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Badge status="processing" text="Available" />
            </Descriptions.Item>
          </Descriptions>

          <div style={{ paddingTop: "1.5em" }}>
            <Button
              type="primary"
              block
              icon={<ShoppingOutlined />}
              size="large"
              class="snipcart-add-item"
              data-item-id={props.id}
              data-item-price={props.price}
              data-item-url={"/products/" + props.id}
              data-item-description={props.description}
              data-item-image="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              data-item-name={props.name}
            >
              ADD TO BAG
            </Button>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ProductDetail
