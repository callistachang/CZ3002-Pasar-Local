import { HomeOutlined } from "@ant-design/icons"
import { Breadcrumb, Col, Row } from "antd"
import { useRouter } from "next/router"
import GeneralLayout from "../../components/layout/GeneralLayout"
import ProductCardList from "../../components/product/ProductCardList"
import ProductPageSidebar from "../../components/product/ProductPageSidebar"
import ProductDetail from "../../components/product/ProductDetail"

const Product = () => {
  const router = useRouter()
  const { id } = router.query
  const data = {
    name: "MOTF PREMIUM VISCOSE MIDI SHIRT DRESS",
    price: 24.48,
    description:
      "Please note: This fabric is super breathable, but fairly thick and durable, perfect for fall and winter wear.",
    tags: ["Women Clothing", "Dress"],
  }

  return (
    <GeneralLayout activeMenuItem="products">
      <Breadcrumb style={{ padding: "2em 0.5em 0" }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Marketplace</Breadcrumb.Item>
        <Breadcrumb.Item href={"/products/" + id}>
          <span>{data.name}</span>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div style={{ padding: "2em 15em" }}>
        <ProductDetail id={id} {...data} />
        <div style={{ paddingTop: "2em" }}>More products you might like...</div>
      </div>
    </GeneralLayout>
  )
}

export default Product
