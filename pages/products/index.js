import { HomeOutlined } from "@ant-design/icons"
import { Breadcrumb, Col, Row } from "antd"
import GeneralLayout from "../../components/layout/GeneralLayout"
import ProductPageSidebar from "../../components/product/ProductPageSidebar"
import ProductCardList from "../../components/product/ProductCardList"
import { useState } from "react"
import useAsyncEffect from "use-async-effect"
import { getAllDocuments, getVendorsFromCategory } from "../../utils/api"

const ProductsList = () => {
  const [products, setProducts] = useState([])

  useAsyncEffect(async () => {
    setProducts(await getAllDocuments("product"))
  }, [])

  return (
    <>
      <GeneralLayout activeMenuItem="products">
        <Breadcrumb style={{ padding: "2em 0.5em 0" }}>
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/product-categories">
            Marketplace
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            {/* <span>{category}</span> */}
          </Breadcrumb.Item>
        </Breadcrumb>

        <Row gutter={[20, 20]} style={{ paddingTop: "2em" }}>
          <Col sm={{ span: 4 }}>
            <ProductPageSidebar />
          </Col>
          <Col sm={{ span: 20 }}>
            <ProductCardList data={products} />
          </Col>
        </Row>
      </GeneralLayout>
    </>
  )
}

export default ProductsList
