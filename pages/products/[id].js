import { HomeOutlined } from "@ant-design/icons"
import { Breadcrumb, Col, Row } from "antd"
import { useRouter } from "next/router"
import GeneralLayout from "../../components/layout/GeneralLayout"
import ProductCardList from "../../components/product/ProductCardList"
import ProductPageSidebar from "../../components/product/ProductPageSidebar"
import ProductDetail from "../../components/product/ProductDetail"

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
        <div style={{ paddingTop: "2em" }}>More products you might like...</div>
      </div>
    </GeneralLayout>
  )
}

export async function getStaticPaths() {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  // const paths = posts.map((post) => ({
  //   params: { id: post.id },
  // }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // return { paths, fallback: false }
  return {
    paths: [{ params: { id: "1" } }],
    fallback: false,
  }
}

export async function getStaticProps() {
  const data = {
    name: "MOTF PREMIUM VISCOSE MIDI SHIRT DRESS",
    price: 24.48,
    description:
      "Please note: This fabric is super breathable, but fairly thick and durable, perfect for fall and winter wear.",
    tags: ["Women Clothing", "Dress"],
  }

  return {
    props: {
      data,
    },
  }
}

export default Product
