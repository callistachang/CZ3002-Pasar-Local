import { ShoppingCartOutlined } from "@ant-design/icons"

const Cart = () => {
  return (
    <>
      <div className="snipcart-checkout">
        <ShoppingCartOutlined style={{ fontSize: "20px" }} />
        <span className="snipcart-items-count"></span>
      </div>
    </>
  )
}

export default Cart
