import { Col, Pagination, Row } from "antd"
import { useState } from "react"
import ProductCard from "./ProductCard"

const ProductCardList = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const ROW_SIZE = 4 // should be a divisor of 24
  const COL_SIZE = 4
  const NUM_VENDORS_PER_PAGE = ROW_SIZE * COL_SIZE
  // temp
  // const data = Array.from({ length: 25 }, (_, i) => i + 1)

  const slicedData = () =>
    data.slice(
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
        total={data ? data.length : 0}
        style={{ textAlign: "center", paddingTop: "1em" }}
      />
      <br />
      <Row gutter={[40, 32]}>
        {data &&
          data.length > 0 &&
          slicedData().map((x, index) => (
            <Col key={index} sm={{ span: 24 / ROW_SIZE }} gutter={100}>
              <ProductCard {...x} />
            </Col>
          ))}
      </Row>
    </>
  )
}

export default ProductCardList
