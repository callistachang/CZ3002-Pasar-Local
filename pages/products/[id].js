import { HomeOutlined } from "@ant-design/icons"
import { Breadcrumb, Col, Divider, Row } from "antd"
import { useRouter } from "next/router"
import GeneralLayout from "../../components/layout/GeneralLayout"
import ProductCard from "../../components/product/ProductCard"
import ProductDetail from "../../components/product/ProductDetail"
import { getAllIds, getDocument } from "../../utils/api"

const Product = (props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <GeneralLayout activeMenuItem="products">
      <Breadcrumb style={{ padding: "2em 0.5em 0" }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Marketplace</Breadcrumb.Item>
        <Breadcrumb.Item href={"/products/" + id}>
          <span>{props.data.name}</span>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div style={{ padding: "2em 15em" }}>
        <ProductDetail id={id} {...props.data} />
        <br />
        <br />
        <Divider orientation="left" style={{ fontSize: "2em" }}>
          More products you might like
        </Divider>
        <p style={{ fontSize: "1.2em" }}>
          This feature is currently in beta. The following products were
          recommended by our Word2Vec model :)!
        </p>
        <Row gutter={[40, 32]}>
          {props.moreProducts &&
            props.moreProducts.length > 0 &&
            props.moreProducts.map((x, index) => (
              <Col key={index} sm={{ span: 4 }} gutter={500}>
                <ProductCard {...x} />
              </Col>
            ))}
        </Row>
      </div>
    </GeneralLayout>
  )
}

export async function getStaticPaths() {
  const ids = await getAllIds("product")
  const pathList = ids.map((idx) => {
    return {
      params: {
        id: idx,
      },
    }
  })

  return {
    paths: pathList,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const data = await getDocument("product", context.params.id)
  let moreProducts = await fetch(
    `https://pasar-local.herokuapp.com/product/suggest?pid=${context.params.id}`
  ).then((response) => response.json())
  moreProducts = Object.keys(moreProducts).map(function (key) {
    return moreProducts[key]
  })

  return {
    props: {
      data,
      moreProducts,
    },
  }
}

export default Product
