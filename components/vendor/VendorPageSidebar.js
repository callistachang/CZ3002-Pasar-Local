import { Col, Divider, Row, Slider } from "antd"
import { useState } from "react"

const VendorPageSidebar = () => {
  const [priceRange, setPriceRange] = useState([20, 50])

  const updatePriceRange = (value) => {
    console.log(value)
  }
  return (
    <div>
      {/* <Divider orientation="left">Left Text</Divider> */}
      <Divider />
      <span>Price Range (SGD)</span>
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
    </div>
  )
}

export default VendorPageSidebar
