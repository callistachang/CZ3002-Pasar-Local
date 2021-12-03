import { HomeOutlined } from "@ant-design/icons"
import { Breadcrumb } from "antd"
import { useRouter } from "next/router"
import GeneralLayout from "../../components/layout/GeneralLayout"
import VendorDetail from "../../components/vendor/VendorDetail"
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
