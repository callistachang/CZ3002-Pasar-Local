import { useState } from "react"
import ProductCard from "../product/ProductCard"
import {
  Col,
  Row,
  Pagination,
  Divider,
  Input,
  Radio,
  Slider,
  Space,
} from "antd"

const VendorProductCardList = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const [priceRange, setPriceRange] = useState([20, 50])
  const [radioValue, setRadioValue] = useState(1)
  const [productData, setProductData] = useState(data)

  const ROW_SIZE = 4 // should be a divisor of 24
  const COL_SIZE = 4
  const NUM_VENDORS_PER_PAGE = ROW_SIZE * COL_SIZE

  const updatePriceRange = (value) => {
    setProductData(
      data.filter((x) => x.price >= value[0] && x.price <= value[1])
    )
  }

  const updateCategoryRadioButtons = (e) => {
    setRadioValue(e.target.value)
    setProductData(data.filter((x) => x.tags.includes(e.target.value)))
  }

  const slicedData = () =>
    productData.slice(
      (pageNumber - 1) * NUM_VENDORS_PER_PAGE,
      pageNumber * NUM_VENDORS_PER_PAGE
    )

  return (
    <>
      {/* <Col sm={{ span: 4 }}>
        <Divider orientation="left">
          <span style={{ "font-weight": "bold" }}>Price Range</span>
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
          <span style={{ "font-weight": "bold" }}>Categories</span>
        </Divider>
        <Radio.Group onChange={updateCategoryRadioButtons} value={radioValue}>
          <Space direction="vertical">
            {Object.keys(tags).map((key) => (
              <Radio value={key}>
                {key} ({tags[key]})
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Col> */}
      {/* <Col sm={{ span: 20 }}> */}
      <Pagination
        onChange={(pageNo) => {
          setPageNumber(pageNo)
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
        total={productData ? productData.length : 0}
        style={{ textAlign: "center", paddingTop: "1em" }}
      />
      <br />
      <Row gutter={[40, 32]}>
        {productData &&
          productData.length > 0 &&
          slicedData().map((x, index) => (
            <Col key={index} sm={{ span: 24 / ROW_SIZE }} gutter={100}>
              <ProductCard {...x} />
            </Col>
          ))}
      </Row>
      {/* </Col> */}
    </>
  )
}

export default VendorProductCardList
