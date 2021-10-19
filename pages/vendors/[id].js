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
import GeneralLayout from "../../components/layout/GeneralLayout"
import VendorDetail from "../../components/vendor/VendorDetail"

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
        <VendorDetail id={id} {...props.data} />
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
    name: "Nike",
    description: "Just Do It",
    address: "123 Road",
    instagram: "@nike",
    email: "nike@gmail.com",
    website: "nike.com",
    phone: "+65 0192 2341",
  }

  return {
    props: {
      data,
    },
  }
}

export default Vendor
