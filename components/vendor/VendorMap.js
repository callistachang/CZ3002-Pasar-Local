import GoogleMapReact from "google-map-react"
import { useState } from "react"
import { Button, Popover } from "antd"
import { EnvironmentTwoTone } from "@ant-design/icons"
import { Link } from "next/link"
import { useRouter } from "next/dist/client/router"

const VendorMap = () => {
  const router = useRouter()
  const [markerList, setMarkerList] = useState([
    { id: "Vendor 1", lat: 1.35, lng: 103.82 },
    { id: "Vendor 2", lat: 1.36, lng: 103.82 },
  ])
  const AnyReactComponent = ({ text }) => (
    <Popover
      content={
        <Button type="link" onClick={() => router.push("/vendors/1")}>
          Visit Profile
        </Button>
      }
      title={text}
      trigger="click"
    >
      <EnvironmentTwoTone twoToneColor="#eb2f96" style={{ fontSize: "2em" }} />
    </Popover>
  )

  return (
    <>
      <div style={{ height: "600px", width: "1900px" }}>
        <GoogleMapReact
          onClick={(e) => {
            console.log(e.lat)
            console.log(e.lng)
          }}
          bootstrapURLKeys={{
            key: "AIzaSyDIWgYGDqHsaNGXR4H5odY77HXgXSAatak",
          }}
          defaultCenter={{ lat: 1.35, lng: 103.82 }}
          defaultZoom={11.5}
          resetBoundsOnResize={true}
        >
          {/* <AnyReactComponent lat={1.35} lng={103.82} text="ree" />
          <AnyReactComponent lat={1.37} lng={103.82} text="ree" /> */}
          {markerList.map((marker) => {
            return (
              <AnyReactComponent
                key={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                text={marker.id}
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
