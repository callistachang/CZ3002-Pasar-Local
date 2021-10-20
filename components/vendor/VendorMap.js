import GoogleMapReact from "google-map-react"
import { useState } from "react"
import { Avatar, Button, Popover } from "antd"
import { EnvironmentTwoTone } from "@ant-design/icons"
import { Link } from "next/link"
import { useRouter } from "next/dist/client/router"

const VendorMap = (props) => {
  const router = useRouter()
  // const [markerList, setMarkerList] = useState([
  //   { id: "Vendor 1", lat: 1.35, lng: 103.82 },
  //   { id: "Vendor 2", lat: 1.36, lng: 103.82 },
  // ])
  const AnyReactComponent = ({ text, id, imageUrl }) =>
    props.popover ? (
      <Popover
        content={
          <a onClick={() => router.push(`/vendors/${id}`)}>Visit Profile</a>
        }
        title={text}
        trigger="click"
      >
        <Avatar
          src={imageUrl}
          shape="square"
          style={{ border: "1px solid #000" }}
        />
      </Popover>
    ) : (
      // <Popover
      //   content={
      //     <Button type="link" onClick={() => router.push(`/vendors/${id}`)}>
      //       Visit Profile
      //     </Button>
      //   }
      //   title={text}
      //   trigger="click"
      // >
      //   <EnvironmentTwoTone
      //     twoToneColor="#eb2f96"
      //     style={{ fontSize: "2em" }}
      //   />
      // </Popover>
      <EnvironmentTwoTone twoToneColor="#eb2f96" style={{ fontSize: "3em" }} />
    )

  return (
    <>
      <div style={props.sizes}>
        <GoogleMapReact
          onClick={(e) => {
            console.log(e.lat)
            console.log(e.lng)
          }}
          bootstrapURLKeys={{
            key: "AIzaSyDIWgYGDqHsaNGXR4H5odY77HXgXSAatak",
          }}
          defaultCenter={props.defaultCenter}
          defaultZoom={props.defaultZoom}
          resetBoundsOnResize={true}
        >
          {/* <AnyReactComponent lat={1.35} lng={103.82} text="ree" />
          <AnyReactComponent lat={1.37} lng={103.82} text="ree" /> */}
          {props.markerList.map((marker) => {
            return (
              <AnyReactComponent
                key={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                text={marker.name}
                id={marker.id}
                imageUrl={marker.imageUrl}
                // use your hover state (from store, react-controllables etc...)
              />
            )
          })}
        </GoogleMapReact>
      </div>
    </>
  )
}

export default VendorMap
