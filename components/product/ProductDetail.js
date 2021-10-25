import { ShoppingOutlined } from "@ant-design/icons"
import { Avatar, Badge, Button, Card, Col, Descriptions, Row, Tag } from "antd"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"
import { withRouter } from "next/router"
import { useState } from "react"
import useAsyncEffect from "use-async-effect"
import { getDocument } from "../../utils/api"

const { Meta } = Card

const ProductDetail = (props) => {
  const router = useRouter()
  const [vendorData, setVendorData] = useState("")
  useAsyncEffect(async () => {
    setVendorData(await getDocument("vendor", props.vendorId))
    // console.log(vendorData)
  }, [])

  return (
    <>
      <Row gutter={[40, 20]}>
        <Col sm={{ span: 10 }}>
          {/* <Image alt="product" height={800} width={800} src={props.imageUrl} /> */}
          <Image
            alt="product"
            src={props.imageUrl}
            layout="responsive"
            width="100%"
            height="80%"
            objectFit="contain"
            quality={50}
          />
        </Col>
        <Col sm={{ span: 14 }} gutter={[16, 24]}>
          <Descriptions
            title={<span style={{ fontSize: "1.5em" }}>{props.name}</span>}
            bordered
          >
            <Descriptions.Item label="Vendor" span={3}>
              <Avatar src={vendorData.vendorLogoLink} />
              <a>{vendorData.name}</a>
            </Descriptions.Item>
            <Descriptions.Item label="Price" span={3}>
              ${props.price}
            </Descriptions.Item>
            <Descriptions.Item label="Tags" span={3}>
              {props.tags.map((tag, index) => {
                const colors = [
                  "magenta",
                  "red",
                  "volcano",
                  "orange",
                  "gold",
                  "lime",
                  "green",
                  "cyan",
                  "blue",
                  "geekblue",
                  "purple",
                ]
                return (
                  <Tag color={colors[index % colors.length]} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                )
              })}
            </Descriptions.Item>
            <Descriptions.Item label="Description" span={3}>
              {props.description}
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
              <Badge status="processing" text="Available" />
            </Descriptions.Item>
          </Descriptions>

          <div style={{ paddingTop: "1.5em" }}>
            <Button
              type="primary"
              block
              icon={<ShoppingOutlined />}
              size="large"
              className="snipcart-add-item"
              data-item-id={props.id}
              data-item-price={props.price}
              data-item-url={
                "https://pasar-local.vercel.app/products/" + props.id
              }
              data-item-description={props.description}
              data-item-image={props.imageUrl}
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
