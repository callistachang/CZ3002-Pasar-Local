import { Col, Pagination, Row } from "antd"
import { useState } from "react"
import VendorCard from "./VendorCard"

const VendorCardList = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const NUM_VENDORS_PER_PAGE = 9

  // temp
  const data = Array.from({ length: 25 }, (_, i) => i + 1)

  const slicedData = () =>
    data.slice(
      (pageNumber - 1) * NUM_VENDORS_PER_PAGE,
      pageNumber * NUM_VENDORS_PER_PAGE
    )

  return (
    <>
      <Row gutter={[24, 24]}>
        {data &&
          data.length > 0 &&
          slicedData().map((x) => (
            <Col
              key="x"
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              gutter={20}
            >
              <VendorCard title={x} />
            </Col>
          ))}
      </Row>
      <Pagination
        onChange={(pageNo) => {
          setPageNumber(pageNo)
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
        total={data.length}
        style={{ textAlign: "center", paddingTop: "1em" }}
      />
    </>
  )
}

export default VendorCardList
