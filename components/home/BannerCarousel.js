import { Carousel, Image } from "antd"
import React from "react"
import styles from "./BannerCarousel.module.css"

const BannerCarousel = () => {
  const carouselData = [
    {
      key: "1",
      src: "https://visme.co/blog/wp-content/uploads/2020/12/header-19.png",
    },
    {
      key: "2",
      src: "https://visme.co/blog/wp-content/uploads/2020/12/header-19.png",
    },
    {
      key: "3",
      src: "https://visme.co/blog/wp-content/uploads/2020/12/header-19.png",
    },
  ]

  return (
    <Carousel autoplay infinite autoplayInterval={200}>
      {carouselData.map((data) => (
        <Image
          className={styles.contentStyle}
          alt={data.key}
          key={data.key}
          src={data.src}
          preview={false}
        />
      ))}
    </Carousel>
  )
}

export default BannerCarousel
