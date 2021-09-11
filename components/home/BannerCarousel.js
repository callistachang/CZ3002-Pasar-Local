import { Carousel, Layout } from "antd"
import React from "react"
import styles from "./BannerCarousel.module.css"

const BannerCarousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 className={styles.contentStyle}>1</h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>2</h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>3</h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}

export default BannerCarousel
