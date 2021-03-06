import { Card } from "antd"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"

const { Meta } = Card

const VendorCard = (props) => {
  const router = useRouter()

  const vendorUrl = "/vendors/" + props.id

  return (
    <>
      <a href={vendorUrl} onClick={() => router.push(vendorUrl)}>
        <Card
          cover={
            <Image
              alt="Vendor"
              src={props.vendorLogoLink}
              layout="responsive"
              width="100%"
              height="80%"
              objectFit="contain"
              quality={50}
            />
          }
          hoverable
        >
          <Meta
            title={props.name}
            description={props.description}
            style={{ textAlign: "center" }}
          ></Meta>
        </Card>
      </a>
    </>
  )
}

export default VendorCard
