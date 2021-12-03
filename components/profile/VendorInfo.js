import React from "react"
import VendorDetail from "../vendor/VendorDetail"
import { Button } from "antd"

const VendorInfo = (props) => {
  return (
    <>
      <VendorDetail {...props.userData} noProducts />
      <br />
      <br />
      <Button type="primary" block>
        EDIT PROFILE
      </Button>
    </>
  )
}

export default VendorInfo
