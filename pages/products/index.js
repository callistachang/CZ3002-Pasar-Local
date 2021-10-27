import { HomeOutlined } from "@ant-design/icons"
import { Breadcrumb, Row } from "antd"
import GeneralLayout from "../../components/layout/GeneralLayout"
import ProductCardList from "../../components/product/ProductCardList"
import { getAllDocuments, getAllTags } from "../../utils/api"

const ProductsList = (props) => {
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
          <Breadcrumb.Item href=""></Breadcrumb.Item>
        </Breadcrumb>

        <Row gutter={[20, 20]} style={{ paddingTop: "2em" }}>
          <ProductCardList data={props.data} tags={props.tags} />
        </Row>
      </GeneralLayout>
    </>
  )
}
export async function getStaticProps(context) {
  const data = await getAllDocuments("product")
  const tags = await getAllTags()

  return {
    props: {
      data,
      tags,
    },
  }
}

export default ProductsList
