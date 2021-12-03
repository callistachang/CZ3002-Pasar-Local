import { Col, Pagination, Row } from "antd"
import { useState } from "react"
import ProductCard from "../product/ProductCard"

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
