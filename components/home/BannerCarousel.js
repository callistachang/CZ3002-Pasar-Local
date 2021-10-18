import { Carousel, Image } from "antd"
import React from "react"
import styles from "./BannerCarousel.module.css"

const BannerCarousel = () => {
  const carouselData = [
    { src: "https://visme.co/blog/wp-content/uploads/2020/12/header-19.png" },
    { src: "https://visme.co/blog/wp-content/uploads/2020/12/header-19.png" },
    { src: "https://visme.co/blog/wp-content/uploads/2020/12/header-19.png" },
  ]

  return (
    <Carousel autoplay infinite autoplayInterval={200}>
      {carouselData.map((data) => (
        <Image
          className={styles.contentStyle}
          alt={"Banner 1"}
          src={data.src}
          preview={false}
        />
      ))}
    </Carousel>
  )
}

export default BannerCarousel
