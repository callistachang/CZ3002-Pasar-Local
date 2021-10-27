import { Image } from "antd"
import BannerCarousel from "../components/home/BannerCarousel"
import GeneralLayout from "../components/layout/GeneralLayout"

const Home = () => {
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
      </GeneralLayout>
    </>
  )
}

export default Home
