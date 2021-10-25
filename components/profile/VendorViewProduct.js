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
import { getProductsFromVendor } from "../../utils/api"
import useAsyncEffect from "use-async-effect"

const VendorViewProduct = ({ id }) => {
  const [productData, setProductData] = useState([])

  useAsyncEffect(async () => {
    setProductData(await getProductsFromVendor(id))
  }, [])

  return (
    <>
      <Pagination
        onChange={(pageNo) => {
          // setPageNumber(pageNo)
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
        total={productData ? productData.length : 0}
        style={{ textAlign: "center", paddingTop: "1em" }}
      />
      <br />
      <Row gutter={[40, 32]}>
        {productData &&
          productData.length > 0 &&
          productData.map((x, index) => (
            <Col key={index} sm={{ span: 6 }} gutter={100}>
              <ProductCard {...x} />
            </Col>
          ))}
      </Row>
    </>
  )
}

export default VendorViewProduct
