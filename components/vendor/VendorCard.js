import { Card, Tag } from "antd"
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
          // style={{ width: 300 }}
          cover={
            <Image
              alt="Vendor"
              height={250}
              width={200}
              src={props.vendorLogoLink}
            />
          }
          hoverable
          // bordered={false}
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
