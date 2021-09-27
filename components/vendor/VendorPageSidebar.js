import { Col, Divider, Input, Radio, Row, Slider, Space } from "antd"
import { useState } from "react"
import styles from "./Vendor.module.css"

const VendorPageSidebar = () => {
  const [priceRange, setPriceRange] = useState([20, 50])
  const [radioValue, setRadioValue] = useState(1)

  const updatePriceRange = (value) => {
    console.log(value)
  }

  const updateCategoryRadioButtons = (e) => {
    setRadioValue(e.target.value)
  }

  return (
    <Col>
      <Divider orientation="left">
        <span className={styles.boldText}>Price Range</span>
      </Divider>
      <Slider
        range
        onAfterChange={updatePriceRange}
        defaultValue={priceRange}
        min={priceRange[0]}
        max={priceRange[1]}
      />
      <Row justify="space-between">
        <Col>${priceRange[0]}</Col>
        <Col>${priceRange[1]}</Col>
      </Row>

      <Divider orientation="left">
        <span className={styles.boldText}>Categories</span>
      </Divider>
      <Radio.Group onChange={updateCategoryRadioButtons} value={radioValue}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
        </Space>
      </Radio.Group>
    </Col>
  )
}

export default VendorPageSidebar
