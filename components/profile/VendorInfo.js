import { Row, Col, Image, Descriptions } from "antd"

const VendorInfo = () => {
  return (
    <Row gutter={24}>
      <Col span={10}>
        todo: add vendor profile picture and other details
        <Image
          alt={"vendor profile picture"}
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          width={"100%"}
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
  )
}

export default VendorInfo
