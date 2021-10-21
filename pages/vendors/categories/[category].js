import { HomeOutlined } from "@ant-design/icons"
import { Breadcrumb, Col, Row, Divider } from "antd"
import { useRouter } from "next/dist/client/router"
import GeneralLayout from "../../../components/layout/GeneralLayout"
import VendorCardList from "../../../components/vendor/VendorCardList"
import VendorMap from "../../../components/vendor/VendorMap"
import { getVendorsFromCategory } from "../../../utils/api"

const VendorCategory = (props) => {
  const router = useRouter()
  let { category } = router.query
  if (typeof category === "string") {
    category = category.charAt(0).toUpperCase() + category.slice(1)
  }
  // console.log(props.data)

  return (
    <>
      <GeneralLayout activeMenuItem="vendors">
        <Breadcrumb style={{ padding: "2em 0.5em 0" }}>
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/vendor-categories">
            Categories
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <span>{category}</span>
          </Breadcrumb.Item>
        </Breadcrumb>

        <Divider style={{ fontSize: "2em" }}>{category} Vendor Map</Divider>
        <VendorMap
          markerList={props.data.map((x) => {
            return {
              imageUrl: x.vendorLogoLink,
              id: x.id,
              name: x.name,
              lat: x.latitude,
              lng: x.longitude,
            }
          })}
          sizes={{ height: "600px", width: "1900px" }}
          defaultCenter={{ lat: 1.35, lng: 103.82 }}
          defaultZoom={11.5}
          popover
        />
        <br />

        <Divider style={{ fontSize: "2em" }}>{category} Vendor List</Divider>
        <VendorCardList data={props.data} />
      </GeneralLayout>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: "food" } },
      { params: { category: "fashion" } },
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const data = await getVendorsFromCategory(context.params.category)

  return {
    props: {
      data,
    },
  }
}

export default VendorCategory
