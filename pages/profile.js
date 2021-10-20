import { Layout, Menu } from "antd"
import { useSession } from "next-auth/client"
import { Router, useRouter } from "next/dist/client/router"
import GeneralLayout from "../components/layout/GeneralLayout"
import BuyerProfile from "../components/profile/BuyerProfile"
import VendorProfile from "../components/profile/VendorProfile"

const { Sider, Content, Footer } = Layout
const Profile = () => {
  const router = useRouter()
  const [session, loading] = useSession()

  return (
    <>
      <GeneralLayout noPadding noFooter>
        {session ? (
          session.user.image == "vendor" ? (
            <VendorProfile />
          ) : (
            <BuyerProfile />
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

export default Profile
