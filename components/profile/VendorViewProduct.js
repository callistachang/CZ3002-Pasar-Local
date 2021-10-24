import { Row, Col, Image, Descriptions, Button } from "antd"
import React from "react"
import VendorProductCardList from "../vendor/VendorProductCardList"

const VendorViewProduct = () => {

  return (
      // size = size of data and iterate for each data
    // i'll fill this up with data later
    //<VendorProductCardList data={[]} />
      // for i=0 i<size; i++
      //    <Col span={8}>
      //    get image
      //         <Image
      //           alt={"vendor profile picture"}
      //           src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
      //           width={"100%"}
      //         />
      //             <Button type={"primary"} block >
      //                 get item name
      //             </Button>
    <Row gutter={[24, 24]}>
      <Col span={8}>
          <Image
              alt={"vendor profile picture"}
              src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
              width={"100%"}
          />
          <Button type={"primary"} block >
              get item name
          </Button>

      </Col>
      <Col span={8}>
          <Image
              alt={"vendor profile picture"}
              src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
              width={"100%"}
          />
          <Button type={"primary"} block >
              get item name
          </Button>
      </Col>
        <Col span={8}>
            <Image
                alt={"vendor profile picture"}
                src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
                width={"100%"}
            />
            <Button type={"primary"} block >
                get item name
            </Button>
        </Col>

        <Col span={8}>
            <Image
                alt={"vendor profile picture"}
                src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
                width={"100%"}
            />
            <Button type={"primary"} block >
                get item name
            </Button>
        </Col>
    </Row>
  )
}

export default VendorViewProduct
