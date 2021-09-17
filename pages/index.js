import { useEffect, useState } from "react"
import useAsyncEffect from "use-async-effect"
import BannerCarousel from "../components/home/BannerCarousel"
import GeneralLayout from "../components/layout/GeneralLayout"
import { getAllDocuments } from "../utils/api"

const Home = () => {
  const [vendors, setVendors] = useState([])

  useAsyncEffect(async () => {
    setVendors(await getAllDocuments("vendor"))
  }, [])

  return (
    <>
      <GeneralLayout>
        <BannerCarousel />
        {vendors.map((vendor) => (
          <>
            <p>{vendor.username}</p>
            <p>{vendor.password}</p>
            <p>{vendor.fullname}</p>
          </>
        ))}
      </GeneralLayout>
    </>
  )
}

export default Home
