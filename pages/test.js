import { Layout } from "antd"
import { useSession } from "next-auth/client"
import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import useAsyncEffect from "use-async-effect"
import GeneralLayout from "../components/layout/GeneralLayout"
import BuyerProfile from "../components/profile/BuyerProfile"
import VendorProfile from "../components/profile/VendorProfile"
import { getOrders, getAllDocuments } from "../utils/api"

const Test = (props) => {
  useAsyncEffect(async () => {
    const products = await getAllDocuments("vendor")
    console.log(products)
  }, [])

  return (
    <>
      <GeneralLayout noPadding noFooter>
        Test Page
      </GeneralLayout>
    </>
  )
}

export default Test
