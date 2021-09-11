import Image from "next/image"
import { Button, DatePicker } from "antd"
import GeneralLayout from "../components/layout/GeneralLayout"
import BannerCarousel from "../components/home/BannerCarousel"

const Home = () => {
  return (
    <>
      <GeneralLayout>
        <BannerCarousel />
      </GeneralLayout>
    </>
  )
}

export default Home
