import { Image } from "antd"
import { useEffect, useState } from "react"
import useAsyncEffect from "use-async-effect"
import BannerCarousel from "../components/home/BannerCarousel"
import GeneralLayout from "../components/layout/GeneralLayout"
import { getAllDocuments } from "../utils/api"

const Home = () => {
  // const [vendors, setVendors] = useState([])

  // useAsyncEffect(async () => {
  //   setVendors(await getAllDocuments("vendor"))
  // }, [])

  return (
    <>
      <GeneralLayout noPadding>
        <BannerCarousel />
        <br />
        <br />
        <div style={{ textAlign: "center", fontSize: "1.5em" }}>
          <p style={{ fontSize: "2em", fontWeight: "bold" }}>Pasar Local</p>
          <p>
            One-stop shop for supporting your favorite local small-medium
            enterprises in Singapore
          </p>
          <Image
            width={400}
            height={400}
            src={"/pasar-local.png"}
            alt="Picture of the author"
          />
        </div>
        <br />
        <br />
        {/* {vendors.map((vendor) => (
          <>
            <p>{vendor.username}</p>
            <p>{vendor.password}</p>
            <p>{vendor.fullname}</p>
          </>
        ))} */}
      </GeneralLayout>
    </>
  )
}

export default Home
