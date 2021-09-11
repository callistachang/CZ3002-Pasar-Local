import { Card, Tag } from "antd"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"

const { Meta } = Card

const VendorCard = (props) => {
  const router = useRouter()

  const vendorUrl = "/vendors/" + props.title

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
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          hoverable
          // bordered={false}
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

export default VendorCard
