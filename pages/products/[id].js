import { HomeOutlined } from "@ant-design/icons"
import { Breadcrumb, Col, Divider, Row } from "antd"
import { useRouter } from "next/router"
import GeneralLayout from "../../components/layout/GeneralLayout"
import ProductCardList from "../../components/product/ProductCardList"
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
        <Divider orientation="left" style={{ fontSize: "2em" }}>
          More products you might like
        </Divider>
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

  return {
    props: {
      data,
    },
  }
}

export default Product
