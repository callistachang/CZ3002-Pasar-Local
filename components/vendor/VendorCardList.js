import { Divider, Col, Pagination, Row } from "antd"
import { useState } from "react"
import VendorCard from "./VendorCard"

const VendorCardList = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const ROW_SIZE = 4 // should be a divisor of 24
  const COL_SIZE = 3
  const NUM_VENDORS_PER_PAGE = ROW_SIZE * COL_SIZE

  // temp - replace with actual data
  const data = Array.from({ length: 25 }, (_, i) => i + 1)

  const slicedData = () =>
    data.slice(
      (pageNumber - 1) * NUM_VENDORS_PER_PAGE,
      pageNumber * NUM_VENDORS_PER_PAGE
    )

  return (
    <>
      <Divider style={{ fontSize: "2em" }}>Vendor List</Divider>
      <Pagination
        onChange={(pageNo) => {
          setPageNumber(pageNo)
          // window.scrollTo({ top: 0, behavior: "smooth" })
        }}
        total={data.length}
        style={{ textAlign: "center" }}
      />
      <br />
      <Row gutter={[24, 24]}>
        {data &&
          data.length > 0 &&
          slicedData().map((x) => (
            <Col key="x" lg={{ span: 24 / ROW_SIZE }} gutter={20}>
              <VendorCard title={x} />
            </Col>
          ))}
      </Row>
    </>
  )
}

export default VendorCardList
