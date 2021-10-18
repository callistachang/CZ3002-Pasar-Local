import { Row, Col, Image, Descriptions, Layout, Menu } from "antd"
import styles from "../home/BannerCarousel.module.css"

const VendorInfo = () => {
  return (
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
  )
}

export default VendorInfo
