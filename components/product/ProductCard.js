import { Card, Tag } from "antd"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"

const { Meta } = Card

const ProductCard = (props) => {
  const router = useRouter()

  const productUrl = "/products/" + props.title

  return (
    <>
      <a href={productUrl} onClick={() => router.push(productUrl)}>
        <Card
          // style={{ width: 300 }}
          cover={
            <Image
              alt="product"
              height={250}
              width={200}
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          hoverable
        >
          <Meta
            title={props.title}
            description={props.title}
            style={{ textAlign: "center" }}
          >
            {/* <Tag>Tag 1</Tag> */}
          </Meta>
        </Card>
      </a>
    </>
  )
}

export default ProductCard
