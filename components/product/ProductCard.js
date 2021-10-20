import { Avatar, Card, Tag } from "antd"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"
import { useState } from "react"
import useAsyncEffect from "use-async-effect"
import { getDocument } from "../../utils/api"

const { Meta } = Card

const ProductCard = (props) => {
  const router = useRouter()

  const [vendorData, setVendorData] = useState("")
  useAsyncEffect(async () => {
    setVendorData(await getDocument("vendor", props.vendorId))
  }, [])

  const productUrl = `/products/${props.id}`

  return (
    <>
      <a href={productUrl} onClick={() => router.push(productUrl)}>
        <Card
          // style={{ width: 300 }}
          cover={
            <Image
              alt="product"
              height={700}
              width={1000}
              src={props.imageUrl}
              quality={100}
            />
          }
          hoverable
        >
          <Meta
            avatar={<Avatar src={vendorData.vendorLogoLink}></Avatar>}
            title={props.name}
            description={`$${props.price}`}
            // style={{ textAlign: "center" }}
          />
        </Card>
      </a>
    </>
  )
}

export default ProductCard
