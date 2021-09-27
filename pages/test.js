import React, { useState } from "react"
import AccountLayout from "../components/layout/AccountLayout"
import GeneralLayout from "../components/layout/GeneralLayout"
import GoogleMapReact from "google-map-react"

const VendorLogin = () => {
  const [markerList, setMarkerList] = useState([
    { id: "Aasdfasdf", lat: 1.35, lng: 103.82 },
    { id: "Basdfjasdjf", lat: 1.36, lng: 103.82 },
  ])
  const AnyReactComponent = ({ text }) => <div>{text}</div>

  return (
    <GeneralLayout>
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          onClick={(e) => {
            console.log(e.lat)
            console.log(e.lng)
          }}
          bootstrapURLKeys={{ key: "AIzaSyDIWgYGDqHsaNGXR4H5odY77HXgXSAatak" }}
          defaultCenter={{ lat: 1.35, lng: 103.82 }}
          defaultZoom={11.5}
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
    </GeneralLayout>
  )
}

export default VendorLogin
