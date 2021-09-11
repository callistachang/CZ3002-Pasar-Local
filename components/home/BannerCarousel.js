import { Carousel, Layout } from "antd"
import Image from "next/image"
import React from "react"
import styles from "./BannerCarousel.module.css"

const BannerCarousel = () => {
  return (
    <Carousel autoplay infinite autoplayInterval={200}>
      <div>
        <h3 className={styles.contentStyle}>Support Local</h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>wheeeeeeeee</h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>woooooooooo</h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>SMEll</h3>
      </div>
    </Carousel>
  )
}

export default BannerCarousel
