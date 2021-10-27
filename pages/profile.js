import { Layout } from "antd"
import { useSession } from "next-auth/client"
import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import GeneralLayout from "../components/layout/GeneralLayout"
import BuyerProfile from "../components/profile/BuyerProfile"
import VendorProfile from "../components/profile/VendorProfile"
import { getOrders } from "../utils/api"

const { Sider, Content, Footer } = Layout
const Profile = (props) => {
  const router = useRouter()
  const [session, loading] = useSession()
  const [vendorProducts, setVendorProducts] = useState([])

  return (
    <>
      <GeneralLayout noPadding noFooter>
        {session ? (
          session.user.image == "vendor" ? (
            <VendorProfile orders={props.orders} id={session.user.id} />
          ) : (
            <BuyerProfile orders={props.orders} />
          )
        ) : (
          <p style={{ textAlign: "center", fontSize: "2em" }}>
            You are not authorized to view this page. Please login!
          </p>
        )}
      </GeneralLayout>
    </>
  )
}

export async function getStaticProps(context) {
  const orders = await getOrders()

  return {
    props: {
      orders,
    },
  }
}

export default Profile
