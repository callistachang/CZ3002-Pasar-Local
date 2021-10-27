import React from "react"
import VendorDetail from "../vendor/VendorDetail"

const VendorInfo = (props) => {
  return <VendorDetail {...props.userData} noProducts />
}

export default VendorInfo
