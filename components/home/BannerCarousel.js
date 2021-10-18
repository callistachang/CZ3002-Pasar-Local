import { Carousel } from "antd"
import { Image } from 'antd'
import React from "react"
import styles from "./BannerCarousel.module.css"

// add image links
const BannerCarousel = () => {
  return (
    <Carousel autoplay infinite autoplayInterval={200}>
      <div>
          <Image
              className={styles.contentStyle}
              alt={"Banner 1"}
              src="https://visme.co/blog/wp-content/uploads/2020/12/header-19.png"
          />
      </div>
      <div>
          <Image
              className={styles.contentStyle}
              alt={"Banner 2"}
              src="https://visme.co/blog/wp-content/uploads/2020/12/header-19.png"
          />
      </div>
      <div>
          <Image
              className={styles.contentStyle}
              alt={"Banner 3"}
              src="https://visme.co/blog/wp-content/uploads/2020/12/header-19.png"
          />
      </div>
      <div>
          <Image
              className={styles.contentStyle}
              alt={"Banner 4"}
              src="https://visme.co/blog/wp-content/uploads/2020/12/header-19.png"
          />
      </div>
    </Carousel>
  )
}

export default BannerCarousel
