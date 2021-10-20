// import { useRouter } from "next/router"

// const Vendor = () => {
//   const router = useRouter()
//   const { id } = router.query
//   return <div>{id}</div>
// }

// export default Vendor
import { HomeOutlined } from "@ant-design/icons"
import { Breadcrumb, Col, Row } from "antd"
import { useRouter } from "next/router"
import { Divider } from "rc-menu"
import GeneralLayout from "../../components/layout/GeneralLayout"
import VendorDetail from "../../components/vendor/VendorDetail"
import VendorMap from "../../components/vendor/VendorMap"
import { getAllIds, getDocument, getProductsFromVendor } from "../../utils/api"

const Vendor = (props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <GeneralLayout activeMenuItem="vendors">
      <Breadcrumb style={{ padding: "2em 0.5em 0" }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Marketplace</Breadcrumb.Item>
        <Breadcrumb.Item href={"/products/" + id}>
          <span>{props.data.name}</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      {/* <Divider style={{ fontSize: "2em" }}>Vendor Map</Divider> */}

      <div style={{ padding: "2em 15em" }}>
        <VendorDetail id={id} {...props.data} products={props.products} />
      </div>
    </GeneralLayout>
  )
}

export async function getStaticPaths() {
  const ids = await getAllIds("vendor")
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
  const data = await getDocument("vendor", context.params.id)
  const products = await getProductsFromVendor(context.params.id)

  return {
    props: {
      data,
      products,
    },
  }
}

export default Vendor
