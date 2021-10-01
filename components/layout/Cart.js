import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button } from "antd"

const Cart = () => {
  return (
    <>
      <div className="snipcart-checkout">
        <ShoppingCartOutlined style={{ fontSize: "20px" }} />
        <span class="snipcart-items-count"></span>
      </div>
    </>
  )
}

export default Cart
